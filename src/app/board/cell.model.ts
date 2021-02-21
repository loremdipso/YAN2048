export class Cell {
	value: number;
	shouldAppear: boolean = false;
	wasMerged: boolean = false;

	constructor() {
		this.value = 0;
	}
}