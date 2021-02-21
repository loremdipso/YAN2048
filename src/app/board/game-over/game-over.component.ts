import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-game-over',
	templateUrl: './game-over.component.html',
	styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

	constructor(
		private dialogRef: MatDialogRef<GameOverComponent>
	) { }

	ngOnInit(): void {
	}

	reset() {
		this.dialogRef.close(GAME_OVER_ACTIONS.reset);
	}

	half() {
		this.dialogRef.close(GAME_OVER_ACTIONS.half);
	}
}

export const GAME_OVER_ACTIONS = {
	reset: 1,
	half: 2
};