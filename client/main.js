(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pushk\Desktop\mafia-card-game\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0QSR":
/*!**************************************!*\
  !*** ./src/app/game/game.service.ts ***!
  \**************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GameService {
    constructor(http) {
        this.http = http;
    }
    getGameStatus(roomCode) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendUrl}game/status/${roomCode}`);
    }
    killByMafia(roomCode, citizenName) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendUrl}game/killByMafia`, {
            roomCode,
            citizenName,
        });
    }
    killByCivil(roomCode, citizenName) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendUrl}game/killByCivil`, {
            roomCode,
            citizenName,
        });
    }
    policeCheck(roomCode, citizenName, cardIndex) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendUrl}game/policeCheck`, {
            roomCode,
            citizenName,
            cardIndex,
        });
    }
    cardReveal(roomCode, citizenName, cardIndex) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendUrl}game/cardReveal`, {
            roomCode,
            citizenName,
            cardIndex,
        });
    }
    startNight(roomCode) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendUrl}game/startNight`, {
            roomCode,
        });
    }
    startJudge(roomCode) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendUrl}game/startJudge`, {
            roomCode,
        });
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7Ook":
/*!*********************************************!*\
  !*** ./src/app/game/idle/idle.component.ts ***!
  \*********************************************/
/*! exports provided: IdleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdleComponent", function() { return IdleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IdleComponent {
}
IdleComponent.ɵfac = function IdleComponent_Factory(t) { return new (t || IdleComponent)(); };
IdleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdleComponent, selectors: [["game-idle"]], decls: 1, vars: 0, template: function IdleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    } }, encapsulation: 2 });


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
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/constants */ "l207");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    backendUrl: _app_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"],
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

/***/ "FYjP":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _tokens_alert_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tokens/alert.tokens */ "rIjN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




class AlertComponent {
    constructor(message, alertOverlayRef) {
        this.message = message;
        this.alertOverlayRef = alertOverlayRef;
    }
    onDismissClick() {
        this.alertOverlayRef.detach();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_alert_tokens__WEBPACK_IMPORTED_MODULE_0__["ALERT_MODAL_MESSAGE"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_alert_tokens__WEBPACK_IMPORTED_MODULE_0__["ALERT_OVERLAY_REF"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], decls: 8, vars: 1, consts: [[1, "alert-container"], [1, "info-block"], [3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_6_listener() { return ctx.onDismissClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Dismiss");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".alert-container[_ngcontent-%COMP%] {\n  width: 250px;\n  background-color: white;\n  border-radius: 3px;\n}\n.alert-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  padding: 20px 20px 10px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.alert-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  font-size: 48px;\n  color: #f65656;\n  margin-bottom: 20px;\n}\n.alert-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(88, 109, 123, 0.75);\n  font-size: 20px;\n  text-align: center;\n}\n.alert-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #f65656;\n  width: 100%;\n  height: 40px;\n  color: white;\n  padding: 0;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNOO0FBRUk7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFOO0FBSUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQUZKIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgLmluZm8tYmxvY2sge1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgY29sb3I6ICNmNjU2NTY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKCM1ODZkN2IsIDAuNzUpO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjY1NjU2O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/alert/alert.component */ "FYjP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ "fXoL");


// Material Form Controls









// Material Navigation



// Material Layout








// Material Buttons & Indicators








// Material Popups & Modals




// Material Data tables




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
        ], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
        _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common.service */ "gbi4");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









function AppComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onBackClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "arrow_back_ios_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const routes = [
    {
        path: '/room',
        title: 'Главная',
        hasBackBtn: false,
    },
    {
        path: '/room/create',
        title: 'Создание комнаты',
        hasBackBtn: true,
    },
    {
        path: '/room/join',
        title: 'Присоединиться',
        hasBackBtn: true,
    },
    {
        path: '/room/wait',
        title: 'Ждем участников',
        hasBackBtn: true,
    },
    {
        path: '/game',
        title: 'Игра',
        hasBackBtn: false,
    },
];
class AppComponent {
    constructor(router, location, commonService) {
        this.router = router;
        this.location = location;
        this.commonService = commonService;
    }
    ngOnInit() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]))
            .subscribe((event) => {
            this.currentRoute = routes.find((route) => route.path == event.url);
        });
        // this.commonService.openAlertModal({ message: 'SOSI' });
    }
    onBackClick() {
        this.location.back();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [["color", "primary"], ["mat-icon-button", "", "class", "example-icon arrow_back_ios_new-icon", "aria-label", "Example icon-button with heart icon", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "arrow_back_ios_new-icon", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_button_1_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentRoute == null ? null : ctx.currentRoute.hasBackBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentRoute == null ? null : ctx.currentRoute.title);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();


/***/ }),

/***/ "fSPv":
/*!**************************************************!*\
  !*** ./src/app/shared/models/card-type.model.ts ***!
  \**************************************************/
/*! exports provided: CardType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardType", function() { return CardType; });
var CardType;
(function (CardType) {
    CardType[CardType["CIVIL"] = 0] = "CIVIL";
    CardType[CardType["MAFIA"] = 1] = "MAFIA";
    CardType[CardType["POLICE"] = 2] = "POLICE";
})(CardType || (CardType = {}));


/***/ }),

/***/ "gbi4":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/alert/alert.component */ "FYjP");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_tokens_alert_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/tokens/alert.tokens */ "rIjN");
/* harmony import */ var _shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/tokens/game-action.tokens */ "oAsY");
/* harmony import */ var _game_action_action_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/action/action.component */ "iDHc");
/* harmony import */ var _game_idle_idle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/idle/idle.component */ "7Ook");










const DEFAULT_CONFIG = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop',
    panelClass: 'panel',
};
class CommonService {
    constructor(overlay) {
        this.overlay = overlay;
    }
    openIdleModal() {
        if (!this.idleOverlayRef) {
            const config = { backdropClass: 'purple-backdrop' };
            const modalConfig = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
            this.idleOverlayRef = this.createOverlay(modalConfig);
            const idleModalPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_game_idle_idle_component__WEBPACK_IMPORTED_MODULE_7__["IdleComponent"]);
            this.idleOverlayRef.attach(idleModalPortal);
        }
    }
    closeIdleModal() {
        if (this.idleOverlayRef) {
            this.idleOverlayRef.dispose();
            this.idleOverlayRef = null;
        }
    }
    openGameActionModal(config) {
        if (!this.actionOverlayRef) {
            const modalConfig = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
            this.actionOverlayRef = this.createOverlay(modalConfig);
            const injector = this.createKillInjector(config);
            const killModalPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_game_action_action_component__WEBPACK_IMPORTED_MODULE_6__["GameActionComponent"], null, injector);
            this.actionOverlayRef.attach(killModalPortal);
        }
    }
    closeGameActionModal() {
        if (this.actionOverlayRef) {
            this.actionOverlayRef.dispose();
            this.actionOverlayRef = null;
        }
    }
    openAlertModal(config = {}) {
        const modalConfig = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
        this.alertOverlayRef = this.createOverlay(modalConfig);
        const injector = this.createAlertInjector(config, this.alertOverlayRef);
        const alertModalPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"], null, injector);
        this.alertOverlayRef.attach(alertModalPortal);
        this.alertOverlayRef
            .backdropClick()
            .subscribe(() => this.closeAlertModal());
    }
    closeAlertModal() {
        if (this.alertOverlayRef) {
            this.alertOverlayRef.dispose();
            this.alertOverlayRef = undefined;
        }
    }
    getOverlayConfig(config) {
        const positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy,
        });
        return overlayConfig;
    }
    createOverlay(config) {
        const overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    }
    createAlertInjector(config, overlayRef) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"].create({
            providers: [
                { provide: _shared_tokens_alert_tokens__WEBPACK_IMPORTED_MODULE_4__["ALERT_OVERLAY_REF"], useValue: overlayRef },
                { provide: _shared_tokens_alert_tokens__WEBPACK_IMPORTED_MODULE_4__["ALERT_MODAL_MESSAGE"], useValue: config.message },
            ],
        });
    }
    createKillInjector(config) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"].create({
            providers: [
                { provide: _shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_5__["GAME_ACTION_MODAL_CITIZENS"], useValue: config.citizens },
                {
                    provide: _shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_5__["GAME_ACTION_MODAL_CLOSE"],
                    useValue: this.closeGameActionModal.bind(this),
                },
                {
                    provide: _shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_5__["GAME_ACTION_MODAL_ROOM_CODE"],
                    useValue: config.roomCode,
                },
                {
                    provide: _shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_5__["GAME_ACTION_MODAL_ACTION_TYPE"],
                    useValue: config.actionType,
                },
                {
                    provide: _shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_5__["GAME_ACTION_MODAL_MY_CITIZEN"],
                    useValue: config.myCitizen,
                },
                {
                    provide: _shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_5__["GAME_ACTION_MODAL_RESULT_MESSAGE"],
                    useValue: config.gameResultMessage,
                },
                {
                    provide: _shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_5__["GAME_ACTION_MODAL_OPEN_IDLE"],
                    useValue: this.openIdleModal.bind(this),
                },
            ],
        });
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "iDHc":
/*!*************************************************!*\
  !*** ./src/app/game/action/action.component.ts ***!
  \*************************************************/
/*! exports provided: GameActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameActionComponent", function() { return GameActionComponent; });
/* harmony import */ var src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/action.modal */ "q+oF");
/* harmony import */ var src_app_shared_models_card_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/card-type.model */ "fSPv");
/* harmony import */ var src_app_shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/tokens/game-action.tokens */ "oAsY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game.service */ "0QSR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_models_citizen_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/citizen.model */ "qnY0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function GameActionComponent_h4_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.gameResultMessage, " ");
} }
const _c0 = function (a0, a1) { return { selected: a0, "text-danger": a1 }; };
function GameActionComponent_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameActionComponent_ul_4_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const citizen_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r10.onCitizenSelect(citizen_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const citizen_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, citizen_r9.name == (ctx_r8.selected == null ? null : ctx_r8.selected.name), ctx_r8.isCitizenDead(citizen_r9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", citizen_r9.name, " ");
} }
function GameActionComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GameActionComponent_ul_4_li_1_Template, 2, 5, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.citizens);
} }
function GameActionComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameActionComponent_ul_5_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const i_r14 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r15.onCardSelect(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, i_r14 == ctx_r12.selectedCardIndex, card_r13.isRevealed));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r12.cardType2String(card_r13.cardType), " ");
} }
function GameActionComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GameActionComponent_ul_5_li_1_Template, 2, 5, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.myCitizen.cards);
} }
function GameActionComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameActionComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.onKill(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u0423\u0411\u0418\u0422\u042C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r3.selected);
} }
function GameActionComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameActionComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.onPoliceCheck(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u041F\u0420\u041E\u0412\u0415\u0420\u0418\u0422\u042C \u041F\u0415\u0420\u0412\u0423\u042E \u041A\u0410\u0420\u0422\u0423 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r4.selected);
} }
function GameActionComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameActionComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.onPoliceCheck(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u041F\u0420\u041E\u0412\u0415\u0420\u0418\u0422\u042C \u0412\u0422\u041E\u0420\u0423\u042E \u041A\u0410\u0420\u0422\u0423 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r5.selected);
} }
function GameActionComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameActionComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.onCardReveal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u041F\u041E\u041A\u0410\u0417\u0410\u0422\u042C \u041A\u0410\u0420\u0422\u0423 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r6.selectedCardIndex === null || ctx_r6.selectedCardIndex === undefined);
} }
function GameActionComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameActionComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.onGameFinished(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u041D\u0410 \u0413\u041B\u0410\u0412\u041D\u0423\u042E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class GameActionComponent {
    constructor(citizens, closeModal, roomCode, actionType, myCitizen, gameResultMessage, openIdleModal, gameService, router) {
        this.citizens = citizens;
        this.closeModal = closeModal;
        this.roomCode = roomCode;
        this.actionType = actionType;
        this.myCitizen = myCitizen;
        this.gameResultMessage = gameResultMessage;
        this.openIdleModal = openIdleModal;
        this.gameService = gameService;
        this.router = router;
        this.actionTypeEnum = src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__["ActionType"];
    }
    get actionListItems() {
        switch (this.actionType) {
            case src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__["ActionType"].MafiaKill:
            case src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__["ActionType"].PoliceCheck:
            case src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__["ActionType"].CivilKill:
                return this.citizens;
            case src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__["ActionType"].CardReveal:
                return this.myCitizen.cards;
            case src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__["ActionType"].GameFinished:
                return [];
        }
    }
    get actionTitle() {
        if (this.policeCheckResult) {
            return this.cardType2String(this.policeCheckResult.cardType);
        }
        switch (this.actionType) {
            case src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__["ActionType"].MafiaKill:
                return 'Кого убить?';
            case src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__["ActionType"].PoliceCheck:
                return 'Кого проверить?';
            case src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__["ActionType"].CardReveal:
                return 'Вскройте карту';
            case src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__["ActionType"].CivilKill:
                return 'Кого осудить?';
            case src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__["ActionType"].GameFinished:
                return 'Игра окончена';
        }
    }
    onCitizenSelect(citizen) {
        if (this.isCitizenDead(citizen)) {
            return;
        }
        this.selected = citizen;
    }
    onCardSelect(cardIndex) {
        if (this.myCitizen.cards[cardIndex].isRevealed) {
            return;
        }
        this.selectedCardIndex = cardIndex;
    }
    onKill() {
        if (this.actionType == src_app_shared_models_action_modal__WEBPACK_IMPORTED_MODULE_0__["ActionType"].MafiaKill) {
            this.gameService
                .killByMafia(this.roomCode, this.selected.name)
                .subscribe(() => void 0);
        }
        else {
            this.gameService
                .killByCivil(this.roomCode, this.selected.name)
                .subscribe(() => void 0);
        }
        this.openIdleModal();
        this.closeModal();
    }
    onPoliceCheck(cardIndex) {
        this.gameService
            .policeCheck(this.roomCode, this.selected.name, String(cardIndex))
            .subscribe((card) => {
            this.policeCheckResult = card;
            setTimeout(() => this.openIdleModal(), 2000);
        });
    }
    onCardReveal() {
        this.gameService
            .cardReveal(this.roomCode, this.myCitizen.name, this.selectedCardIndex)
            .subscribe(() => void 0);
        this.openIdleModal();
        this.closeModal();
    }
    onGameFinished() {
        this.router.navigate(['']);
        this.closeModal();
    }
    isCitizenDead(citizen) {
        return citizen.cards.every((card) => card.isRevealed);
    }
    cardType2String(cardType) {
        switch (cardType) {
            case src_app_shared_models_card_type_model__WEBPACK_IMPORTED_MODULE_1__["CardType"].CIVIL:
                return 'Мирный житель';
            case src_app_shared_models_card_type_model__WEBPACK_IMPORTED_MODULE_1__["CardType"].MAFIA:
                return 'Мафия';
            case src_app_shared_models_card_type_model__WEBPACK_IMPORTED_MODULE_1__["CardType"].POLICE:
                return 'Комиссар';
        }
    }
}
GameActionComponent.ɵfac = function GameActionComponent_Factory(t) { return new (t || GameActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_2__["GAME_ACTION_MODAL_CITIZENS"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_2__["GAME_ACTION_MODAL_CLOSE"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_2__["GAME_ACTION_MODAL_ROOM_CODE"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_2__["GAME_ACTION_MODAL_ACTION_TYPE"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_2__["GAME_ACTION_MODAL_MY_CITIZEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_2__["GAME_ACTION_MODAL_RESULT_MESSAGE"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tokens_game_action_tokens__WEBPACK_IMPORTED_MODULE_2__["GAME_ACTION_MODAL_OPEN_IDLE"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
GameActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GameActionComponent, selectors: [["game-action"]], decls: 11, vars: 9, consts: [[1, "container"], [1, "mb-3", "text-center"], ["class", "mb-3 text-center", 4, "ngIf"], ["class", "mb-3 p-0", 4, "ngIf"], ["mat-raised-button", "", "class", "w-100", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "w-100 mb-2", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "w-100", 3, "click", 4, "ngIf"], [1, "mb-3", "p-0"], ["class", "text-center mb-2", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "text-center", "mb-2", 3, "ngClass", "click"], ["mat-raised-button", "", 1, "w-100", 3, "disabled", "click"], ["mat-raised-button", "", 1, "w-100", "mb-2", 3, "disabled", "click"], ["mat-raised-button", "", 1, "w-100", 3, "click"]], template: function GameActionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, GameActionComponent_h4_3_Template, 2, 1, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, GameActionComponent_ul_4_Template, 2, 1, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, GameActionComponent_ul_5_Template, 2, 1, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, GameActionComponent_button_6_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, GameActionComponent_button_7_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, GameActionComponent_button_8_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, GameActionComponent_button_9_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, GameActionComponent_button_10_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.actionTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.actionType == ctx.actionTypeEnum.GameFinished);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.policeCheckResult && ctx.actionType != ctx.actionTypeEnum.CardReveal && ctx.actionType != ctx.actionTypeEnum.GameFinished);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.policeCheckResult && ctx.actionType == ctx.actionTypeEnum.CardReveal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.actionType == ctx.actionTypeEnum.MafiaKill || ctx.actionType == ctx.actionTypeEnum.CivilKill);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.actionType == ctx.actionTypeEnum.PoliceCheck && !ctx.policeCheckResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.actionType == ctx.actionTypeEnum.PoliceCheck && !ctx.policeCheckResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.actionType == ctx.actionTypeEnum.CardReveal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.actionType == ctx.actionTypeEnum.GameFinished);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 31px;\n  font-weight: bold;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bold;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  color: white;\n}\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.text-danger[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRUo7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUVFO0VBQ0UscUJBQUE7QUFBSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBQ007RUFDRSxZQUFBO0FBQ1I7QUFDTTtFQUNFLFlBQUE7QUFDUiIsImZpbGUiOiJhY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAzMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGxpIHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBjb2xvcjogcmdiYSh3aGl0ZSwgMC41KTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgICYudGV4dC1kYW5nZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "l207":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! process */ "8oxB");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_0__);

const BASE_URL = process__WEBPACK_IMPORTED_MODULE_0__["env"].BACKEND_URL || 'http://localhost:3000/api/';


/***/ }),

/***/ "oAsY":
/*!*****************************************************!*\
  !*** ./src/app/shared/tokens/game-action.tokens.ts ***!
  \*****************************************************/
/*! exports provided: GAME_ACTION_MODAL_CITIZENS, GAME_ACTION_MODAL_CLOSE, GAME_ACTION_MODAL_ROOM_CODE, GAME_ACTION_MODAL_ACTION_TYPE, GAME_ACTION_MODAL_MY_CITIZEN, GAME_ACTION_MODAL_RESULT_MESSAGE, GAME_ACTION_MODAL_OPEN_IDLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_ACTION_MODAL_CITIZENS", function() { return GAME_ACTION_MODAL_CITIZENS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_ACTION_MODAL_CLOSE", function() { return GAME_ACTION_MODAL_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_ACTION_MODAL_ROOM_CODE", function() { return GAME_ACTION_MODAL_ROOM_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_ACTION_MODAL_ACTION_TYPE", function() { return GAME_ACTION_MODAL_ACTION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_ACTION_MODAL_MY_CITIZEN", function() { return GAME_ACTION_MODAL_MY_CITIZEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_ACTION_MODAL_RESULT_MESSAGE", function() { return GAME_ACTION_MODAL_RESULT_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_ACTION_MODAL_OPEN_IDLE", function() { return GAME_ACTION_MODAL_OPEN_IDLE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const GAME_ACTION_MODAL_CITIZENS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('GAME_ACTION_MODAL_CITIZENS');
const GAME_ACTION_MODAL_CLOSE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('GAME_ACTION_MODAL_CLOSE');
const GAME_ACTION_MODAL_ROOM_CODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('GAME_ACTION_MODAL_ROOM_CODE');
const GAME_ACTION_MODAL_ACTION_TYPE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('GAME_ACTION_MODAL_ACTION_TYPE');
const GAME_ACTION_MODAL_MY_CITIZEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('GAME_ACTION_MODAL_MY_CITIZEN');
const GAME_ACTION_MODAL_RESULT_MESSAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('GAME_ACTION_MODAL_RESULT_MESSAGE');
const GAME_ACTION_MODAL_OPEN_IDLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('GAME_ACTION_MODAL_OPEN_IDLE');


/***/ }),

/***/ "q+oF":
/*!***********************************************!*\
  !*** ./src/app/shared/models/action.modal.ts ***!
  \***********************************************/
/*! exports provided: ActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
var ActionType;
(function (ActionType) {
    ActionType[ActionType["MafiaKill"] = 0] = "MafiaKill";
    ActionType[ActionType["PoliceCheck"] = 1] = "PoliceCheck";
    ActionType[ActionType["CardReveal"] = 2] = "CardReveal";
    ActionType[ActionType["CivilKill"] = 3] = "CivilKill";
    ActionType[ActionType["GameFinished"] = 4] = "GameFinished";
})(ActionType || (ActionType = {}));


/***/ }),

/***/ "qnY0":
/*!************************************************!*\
  !*** ./src/app/shared/models/citizen.model.ts ***!
  \************************************************/
/*! exports provided: Citizen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Citizen", function() { return Citizen; });
class Citizen {
    constructor(name, cards = []) {
        this.name = name;
        this.cards = cards;
        this.shouldRevealCard = false;
    }
    get canPlay() {
        return this.cards.some((card) => !card.isRevealed);
    }
}


/***/ }),

/***/ "rIjN":
/*!***********************************************!*\
  !*** ./src/app/shared/tokens/alert.tokens.ts ***!
  \***********************************************/
/*! exports provided: ALERT_MODAL_MESSAGE, ALERT_OVERLAY_REF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_MODAL_MESSAGE", function() { return ALERT_MODAL_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_OVERLAY_REF", function() { return ALERT_OVERLAY_REF; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const ALERT_MODAL_MESSAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ALERT_MODAL_MESSAGE');
const ALERT_OVERLAY_REF = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ALERT_OVERLAY_REF');


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | room-room-module */[__webpack_require__.e("common"), __webpack_require__.e("room-room-module")]).then(__webpack_require__.bind(null, /*! ./room/room.module */ "mpk1")).then((m) => m.RoomModule),
    },
    {
        path: 'game',
        loadChildren: () => Promise.all(/*! import() | game-game-module */[__webpack_require__.e("common"), __webpack_require__.e("game-game-module")]).then(__webpack_require__.bind(null, /*! ./game/game.module */ "ekgB")).then((m) => m.GameModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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