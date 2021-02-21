import { Component, Input, OnInit } from '@angular/core';
import { Cell } from '../cell.model';

@Component({
	selector: 'app-cell[cell]',
	templateUrl: './cell.component.html',
	styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
	@Input() cell!: Cell;

	colors = COLORS;

	constructor() { }

	get myColor(): string {
		let index = 0;
		if (this.cell.value > 0) {
			let value = this.cell.value;
			while (value > 1) {
				value /= 2;
				index += 1;
			}
			return COLORS[index % COLORS.length];
		}

		return "";
	}

	ngOnInit(): void {
	}
}

const COLORS = [
	"#79867c",
	"#926d6f",
	"#9c1ce3",
	"#4f0af5",
	"#18a1e7",
	"#3e66c1",
	"#9edb24",
	"#48c639",
	"#ead515",
	"#f96d06",
	"#ff0700",
	"#ff00cc"


	// "#001f3f",
	// "#0074D9",
	// "#7FDBFF",
	// "#39CCCC",
	// "#3D9970",
	// "#2ECC40",
	// "#01FF70",
	// "#FFDC00",
	// "#FF851B",
	// "#FF4136",
	// "#85144b",
	// "#F012BE",
	// "#B10DC9",
	// "#111111",
	// "#AAAAAA",
	// "#DDDDDD"
];
