(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0fCc":
/*!**************************************!*\
  !*** ./src/app/room/room.service.ts ***!
  \**************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../constants */ "l207");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class RoomService {
    constructor(http) {
        this.http = http;
        this.room = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.player = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    waitRoom(code, playerName) {
        return this.http.post(`${_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]}room/wait`, {
            code,
            playerName,
        });
    }
    createRoom(creatorName, players, mafia, polices) {
        console.log(_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]);
        return this.http.post(`${_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]}room/create`, {
            creatorName,
            players,
            mafia,
            polices,
        });
    }
    joinRoom(code, playerName) {
        return this.http.post(`${_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]}room/join`, {
            code,
            playerName,
        });
    }
    startRoom(code) {
        return this.http.post(`${_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]}game/start/${code}`, {});
    }
    getAll() {
        return this.http.get(`${_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]}room`);
    }
    get(code, params) {
        return this.http.get(`${_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]}room/${code}`, {
            params,
        });
    }
}
RoomService.ɵfac = function RoomService_Factory(t) { return new (t || RoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RoomService, factory: RoomService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map