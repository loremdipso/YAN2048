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

	constructor(private dialog: MatDialog) {
		this.reset();
	}

	reset() {
		this.isGameOver = false;
		this.cells = [];
		for (let i = 0; i < (NUM_ROWS * NUM_COLS); i++) {
			this.cells.push(new Cell());
		}
	}

	half() {
		console.log("TODO: half");
	}

	ngOnInit(): void {
	}

	didMove() {
		let empties = [];
		for (let cell of this.cells) {
			if (cell.value === 0) {
				empties.push(cell);
			}
		}

		if (empties.length === 0) {
			this.gameOver();
		}
	}

	gameOver() {
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

	moveUp() {
		console.log("up");
		let didMove = false;
		didMove = true;
		if (didMove) {
			this.didMove();
		}
	}
	moveDown() {
		console.log("down");
	}
	moveLeft() {
		console.log("left");
	}
	moveRight() {
		console.log("right");
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