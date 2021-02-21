import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './board/cell/cell.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GameOverComponent } from './board/game-over/game-over.component';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
	overrides = <any>{
		'swipe': { direction: Hammer.DIRECTION_ALL }
	};
}

@NgModule({
	declarations: [
		AppComponent,
		BoardComponent,
		CellComponent,
		GameOverComponent
	],
	imports: [
		BrowserModule,
		MatDialogModule,
		MatButtonModule,
		BrowserAnimationsModule,
		MatIconModule,
	],
	providers: [{
		provide: HAMMER_GESTURE_CONFIG,
		useClass: HammerConfig
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
