import { Component, Input, OnInit } from '@angular/core';
import { Cell } from '../cell.model';

@Component({
	selector: 'app-cell[cell]',
	templateUrl: './cell.component.html',
	styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
	@Input() cell!: Cell;

	constructor() { }

	ngOnInit(): void {
	}
}
