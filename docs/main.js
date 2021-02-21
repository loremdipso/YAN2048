(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/madams/Projects/YAN2048/src/main.ts */"zUnb");


/***/ }),

/***/ "2Ak5":
/*!**********************************************!*\
  !*** ./src/app/board/cell/cell.component.ts ***!
  \**********************************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = ["cell", ""];
const _c1 = function (a0, a1, a2) { return { tile: a0, "tile-new": a1, "tile-merged": a2 }; };
class CellComponent {
    constructor() { }
    ngOnInit() {
    }
}
CellComponent.ɵfac = function CellComponent_Factory(t) { return new (t || CellComponent)(); };
CellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CellComponent, selectors: [["app-cell", "cell", ""]], inputs: { cell: "cell" }, attrs: _c0, decls: 2, vars: 6, consts: [[1, "container", 3, "ngClass"]], template: function CellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c1, !!ctx.cell.value, ctx.cell.shouldAppear, ctx.cell.wasMerged));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cell.value || "", "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  background-color: grey;\n  width: 100%;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container.tile[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBSEoiLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8vICAgZGlzcGxheTogZmxleDtcbiAgLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG5cbiAgJi50aWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GC76":
/*!********************************************************!*\
  !*** ./src/app/board/game-over/game-over.component.ts ***!
  \********************************************************/
/*! exports provided: GameOverComponent, GAME_OVER_ACTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverComponent", function() { return GameOverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_OVER_ACTIONS", function() { return GAME_OVER_ACTIONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class GameOverComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    reset() {
        this.dialogRef.close(GAME_OVER_ACTIONS.reset);
    }
    half() {
        this.dialogRef.close(GAME_OVER_ACTIONS.half);
    }
}
GameOverComponent.ɵfac = function GameOverComponent_Factory(t) { return new (t || GameOverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
GameOverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameOverComponent, selectors: [["app-game-over"]], decls: 8, vars: 0, consts: [["mat-raised-button", "", 3, "click"]], template: function GameOverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "game over!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameOverComponent_Template_button_click_4_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameOverComponent_Template_button_click_6_listener() { return ctx.half(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Half");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLW92ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
const GAME_OVER_ACTIONS = {
    reset: 1,
    half: 2
};


/***/ }),

/***/ "LcVa":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent, NUM_ROWS, NUM_COLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_ROWS", function() { return NUM_ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_COLS", function() { return NUM_COLS; });
/* harmony import */ var _cell_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell.model */ "t7m1");
/* harmony import */ var _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-over/game-over.component */ "GC76");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cell_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cell/cell.component */ "2Ak5");






function BoardComponent_app_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-cell", 4);
} if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", cell_r1);
} }
class BoardComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.isGameOver = false;
        this.cells = [];
        this.score = 0;
        this.clearCellsCB = -1;
        this.reset();
    }
    reset() {
        this.isGameOver = false;
        this.cells = [];
        for (let i = 0; i < (NUM_ROWS * NUM_COLS); i++) {
            this.cells.push(new _cell_model__WEBPACK_IMPORTED_MODULE_0__["Cell"]());
        }
        this.addRandomCell();
    }
    half() {
        console.log("TODO: half");
    }
    ngOnInit() {
    }
    didMove() {
        if (this.addRandomCell()) {
            this.score += 1;
        }
    }
    addRandomCell() {
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
        }
        else {
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
            let dialogRef = this.dialog.open(_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_1__["GameOverComponent"]);
            dialogRef.afterClosed().subscribe((value) => {
                this.isGameOver = false;
                switch (value) {
                    case _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_1__["GAME_OVER_ACTIONS"].reset:
                        this.reset();
                        break;
                    case _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_1__["GAME_OVER_ACTIONS"].half:
                        this.half();
                        break;
                }
            });
        }
    }
    couldMove() {
        // TODO: make less hacky
        return this.moveUp(false) || this.moveDown(false) || this.moveRight(false) || this.moveLeft(false);
    }
    moveUp(commit = true) {
        return this.doMove(previousRow, nextRow, commit);
    }
    moveDown(commit = true) {
        return this.doMove(nextRow, previousRow, commit);
    }
    moveLeft(commit = true) {
        return this.doMove(previousColumn, nextColumn, commit);
    }
    moveRight(commit = true) {
        return this.doMove(nextColumn, previousColumn, commit);
    }
    doMove(nextCellFunction, previousCellFunction, commit) {
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
                    }
                    else {
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
        }
        else if (!this.couldMove()) {
            this.doGameOver();
        }
        else {
            console.log("could move");
        }
        return didMove;
    }
    doSlide(nextCellFunction, previousCellFunction, commit) {
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
                        }
                        else {
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
    moveKeyboard(event) {
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
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], hostBindings: function BoardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BoardComponent_keyup_HostBindingHandler($event) { return ctx.moveKeyboard($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 11, vars: 2, consts: [[3, "click"], [1, "center-region"], [1, "cell-container"], [3, "cell", 4, "ngFor", "ngForOf"], [3, "cell"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_0_listener() { return ctx.moveUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_3_listener() { return ctx.moveLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, BoardComponent_app_cell_6_Template, 1, 1, "app-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_7_listener() { return ctx.moveRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_9_listener() { return ctx.moveDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("<");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cells);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _cell_cell_component__WEBPACK_IMPORTED_MODULE_5__["CellComponent"]], styles: ["[_nghost-%COMP%] {\n  width: min(100vw, 100vh);\n  height: min(100vw, 100vh);\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .center-region[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   .cell-container[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-color: blue;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);\n  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);\n  padding: 10px;\n  gap: 10px;\n}\n[_nghost-%COMP%]   .cell-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0;\n  padding-bottom: 100%;\n  grid-row: 1/1;\n  grid-column: 1/1;\n}\n[_nghost-%COMP%]   .cell-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  grid-row: 1/1;\n  grid-column: 1/1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFJQSxhQUFBO0VBR0Esa0ZBQUE7RUFDQSwrRUFBQTtFQUdBLGFBRE07RUFFTixTQUZNO0FBTlY7QUFVSTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFSTjtBQVdJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBVE4iLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiBtaW4oMTAwdncsIDEwMHZoKTtcbiAgaGVpZ2h0OiBtaW4oMTAwdncsIDEwMHZoKTtcbiAgLy8gICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIC5jZW50ZXItcmVnaW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuXG4gIC5jZWxsLWNvbnRhaW5lciB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgLy8gd2lkdGg6IDUwMHB4O1xuICAgIC8vIGhlaWdodDogNTAwcHg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgJHRoaW5nOiBtaW5tYXgoMCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR0aGluZyAkdGhpbmcgJHRoaW5nICR0aGluZztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICR0aGluZyAkdGhpbmcgJHRoaW5nICR0aGluZztcblxuICAgICRnYXA6IDEwcHg7XG4gICAgcGFkZGluZzogJGdhcDtcbiAgICBnYXA6ICRnYXA7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gICAgICBncmlkLXJvdzogMSAvIDE7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gICAgfVxuXG4gICAgPiAqOmZpcnN0LWNoaWxkIHtcbiAgICAgIGdyaWQtcm93OiAxIC8gMTtcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
const NUM_ROWS = 4;
const NUM_COLS = 4;
const LEFT = 37;
function nextColumn(cells, index) {
    if (((index + 1) % NUM_COLS) === 0) { // far right
        return null;
    }
    return getCellAt(cells, index + 1);
}
function previousColumn(cells, index) {
    if (index % NUM_COLS === 0) { // far left
        return null;
    }
    return getCellAt(cells, index - 1);
}
function nextRow(cells, index) {
    return getCellAt(cells, index + NUM_COLS);
}
function previousRow(cells, index) {
    return getCellAt(cells, index - NUM_COLS);
}
function getCellAt(cells, index) {
    let cell = cells[index];
    return cell || null;
}
function randomElement(elements) {
    return elements[Math.floor(Math.random() * elements.length)];
}
const DEFAULT_VALUES = [2, 4];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/board.component */ "LcVa");


class AppComponent {
    constructor() {
        this.title = 'YAN2048';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-board");
    } }, directives: [_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUFERiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HammerConfig", function() { return HammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.component */ "LcVa");
/* harmony import */ var _board_cell_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board/cell/cell.component */ "2Ak5");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _board_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board/game-over/game-over.component */ "GC76");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











class HammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            'swipe': { direction: hammerjs__WEBPACK_IMPORTED_MODULE_7__["DIRECTION_ALL"] }
        };
    }
}
HammerConfig.ɵfac = function HammerConfig_Factory(t) { return ɵHammerConfig_BaseFactory(t || HammerConfig); };
HammerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: HammerConfig, factory: HammerConfig.ɵfac });
const ɵHammerConfig_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](HammerConfig);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
            useClass: HammerConfig
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"],
        _board_cell_cell_component__WEBPACK_IMPORTED_MODULE_4__["CellComponent"],
        _board_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_8__["GameOverComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "t7m1":
/*!*************************************!*\
  !*** ./src/app/board/cell.model.ts ***!
  \*************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
class Cell {
    constructor() {
        this.shouldAppear = false;
        this.wasMerged = false;
        this.value = 0;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map