import { Component, OnInit } from '@angular/core';
import { Cell } from './cell.model';
import { HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameOverComponent, GAME_OVER_ACTIONS } from './game-over/game-over.component';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
	isGameOver: boolean = false;
	cells: Cell[] = [];
	score: number = 0;
	clearCellsCB: any = -1;

	constructor(private dialog: MatDialog) {
		this.reset();
	}

	reset() {
		this.isGameOver = false;
		this.cells = [];
		for (let i = 0; i < (NUM_ROWS * NUM_COLS); i++) {
			this.cells.push(new Cell());
		}

		for (let i = 0; i < 4; i++) {
			this.addRandomCell();
		}
	}

	half() {
		let num_to_remove = (NUM_COLS * NUM_ROWS) / 2;
		shuffle(this.cells);
		for (let i = 0; i < num_to_remove; i++) {
			this.cells[i].value = 0;
		}
		shuffle(this.cells);
	}

	ngOnInit(): void {
	}

	didMove() {
		if (this.addRandomCell()) {
			this.score += 1;
		}
	}

	addRandomCell(): boolean {
		clearTimeout(this.clearCellsCB);

		let empties = [];
		for (let cell of this.cells) {
			if (cell.value === 0) {
				empties.push(cell);
			}
			cell.shouldAppear = false;
		}

		if (empties.length === 0) {
			this.doGameOver();
			return false;
		} else {
			let randomCell = randomElement(empties);
			randomCell.value = randomElement(DEFAULT_VALUES);
			randomCell.shouldAppear = true;

			this.clearCellsCB = setTimeout(() => {
				for (let cell of this.cells) {
					cell.shouldAppear = false;
					cell.wasMerged = false;
				}
			}, 200);

			return true;
		}
	}

	doGameOver() {
		if (!this.isGameOver) {
			this.isGameOver = true;
			this.dialog.closeAll();
			let dialogRef = this.dialog.open(GameOverComponent);
			dialogRef.afterClosed().subscribe((value) => {
				this.isGameOver = false;
				switch (value) {
					case GAME_OVER_ACTIONS.reset:
						this.reset();
						break;

					case GAME_OVER_ACTIONS.half:
						this.half();
						break;
				}
			});
		}
	}

	couldMove(): boolean {
		// TODO: make less hacky
		return this.moveUp(false) || this.moveDown(false) || this.moveRight(false) || this.moveLeft(false);
	}

	moveUp(commit: boolean = true): boolean {
		return this.doMove(previousRow, nextRow, commit);
	}
	moveDown(commit: boolean = true): boolean {
		return this.doMove(nextRow, previousRow, commit);
	}
	moveLeft(commit: boolean = true): boolean {
		return this.doMove(previousColumn, nextColumn, commit);
	}
	moveRight(commit: boolean = true): boolean {
		return this.doMove(nextColumn, previousColumn, commit);
	}

	doMove(
		nextCellFunction: IAdjacentCellFn,
		previousCellFunction: IAdjacentCellFn,
		commit: boolean
	): boolean {
		let didMove = false;

		if (commit) {
			for (let cell of this.cells) {
				cell.wasMerged = false;
			}
		}

		// slide
		didMove = this.doSlide(nextCellFunction, previousCellFunction, commit) || didMove;
		if (didMove && !commit) {
			return didMove;
		}

		// merge
		let didMerge = false;
		for (let i = 0; i < this.cells.length; i++) {
			let cell = this.cells[i];
			if (cell.value !== 0 && !cell.wasMerged) {
				let previousCell = previousCellFunction(this.cells, i);
				if (previousCell && previousCell.value === cell.value) {
					if (commit) {
						didMerge = true;
						didMove = true;
						cell.wasMerged = true;
						cell.value += previousCell.value;
						previousCell.value = 0;
					} else {
						return true;
					}
				}
			}
		}

		// slide again, if necessary
		if (didMerge) {
			didMove = this.doSlide(nextCellFunction, previousCellFunction, commit) || didMove;
		}

		if (!commit) {
			return didMove;
		}

		if (didMove) {
			this.addRandomCell();
		} else if (!this.couldMove()) {
			this.doGameOver();
		} else {
			console.log("could move");
		}

		return didMove;
	}


	doSlide(
		nextCellFunction: IAdjacentCellFn,
		previousCellFunction: IAdjacentCellFn,
		commit: boolean
	): boolean {
		let didMove = false;
		while (true) {
			let didSlide = false;
			for (let i = 0; i < this.cells.length; i++) {
				let cell = this.cells[i];
				if (cell.value !== 0) {
					let nextCell = nextCellFunction(this.cells, i);
					if (nextCell && nextCell.value === 0) {
						if (commit) {
							didSlide = true;
							didMove = true;
							nextCell.value = cell.value;
							cell.value = 0;
						} else {
							return true;
						}
					}
				}
			}

			if (!didSlide) {
				break;
			}
		}

		return didMove;
	}

	// TODO: get this to work
	// @HostListener('swiperight')
	// public swipe(event: KeyboardEvent) {
	// 	console.log(event);
	// }

	@HostListener('window:keyup', ['$event'])
	moveKeyboard(event: KeyboardEvent) {
		switch (event.key) {
			case 'ArrowUp':
				this.moveUp();
				break;
			case 'ArrowDown':
				this.moveDown();
				break;
			case 'ArrowLeft':
				this.moveLeft();
				break;
			case 'ArrowRight':
				this.moveRight();
				break;
		}
	}

}

export const NUM_ROWS = 4;
export const NUM_COLS = 4;

const LEFT = 37;


interface IAdjacentCellFn {
	(cells: Cell[], index: number): Cell | null
}

function nextColumn(cells: Cell[], index: number): Cell | null {
	if (((index + 1) % NUM_COLS) === 0) { // far right
		return null;
	}
	return getCellAt(cells, index + 1);
}
function previousColumn(cells: Cell[], index: number): Cell | null {
	if (index % NUM_COLS === 0) { // far left
		return null;
	}
	return getCellAt(cells, index - 1);
}

function nextRow(cells: Cell[], index: number): Cell | null {
	return getCellAt(cells, index + NUM_COLS);
}
function previousRow(cells: Cell[], index: number): Cell | null {
	return getCellAt(cells, index - NUM_COLS);
}

function getCellAt(cells: Cell[], index: number): Cell | null {
	let cell = cells[index];
	return cell || null;
}

function randomElement<T>(elements: T[]): T {
	return elements[Math.floor(Math.random() * elements.length)];
}

function shuffle<T>(array: T[]) {
	let currentIndex = array.length;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		let temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

const DEFAULT_VALUES = [2, 4];

