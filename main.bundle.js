webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My Arch App';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__person_form_component_person_form_component_component__ = __webpack_require__("../../../../../src/app/person-form-component/person-form-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_request__ = __webpack_require__("../../../../../src/app/auth-request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_guard__ = __webpack_require__("../../../../../src/app/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_error_handler__ = __webpack_require__("../../../../../src/app/auth-error-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__notification_notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__person_form_component_person_form_component_component__["a" /* PersonFormComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__notification_notification_component__["a" /* NotificationComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__routes__["a" /* appRoutes */], { enableTracing: true }),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_10__user_service__["c" /* UserService */], __WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__notification_service__["b" /* NotificationService */],
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* RequestOptions */], useClass: __WEBPACK_IMPORTED_MODULE_12__auth_request__["a" /* AuthRequestOptions */] },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_14__auth_error_handler__["a" /* AuthErrorHandler */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthErrorHandler = (function () {
    function AuthErrorHandler(injector) {
        this.injector = injector;
    }
    AuthErrorHandler.prototype.handleError = function (error) {
        var router = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]);
        if (error.rejection.status === 401 || error.rejection.status === 403) {
            router.navigate(['system/authentication/login']);
        }
        throw error;
    };
    return AuthErrorHandler;
}());
AuthErrorHandler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */]) === "function" && _a || Object])
], AuthErrorHandler);

var _a;
//# sourceMappingURL=auth-error-handler.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(router, authService, notification) {
        this.router = router;
        this.authService = authService;
        this.notification = notification;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.isTokenExpired()) {
            this.authService.isLoggedIn = true;
            this.authService.authStatus = __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* AuthResponseStatus */].SIGNED_IN;
            this.notification.postMessage('Info alert', 'User successfully signed in!');
            return true;
        }
        this.authService.isLoggedIn = false;
        this.authService.authStatus = __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* AuthResponseStatus */].SESSION_EXPIRED;
        this.notification.postMessage('Info alert', 'Your session has expired. kindly login..!');
        this.router.navigate(['system/authentication/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["c" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__notification_service__["b" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__notification_service__["b" /* NotificationService */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth-request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRequestOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var HEADER_KEY_AUTH = 'Authorization';
var PREFIX_AUTH = 'Bearer';
var AuthRequestOptions = (function (_super) {
    __extends(AuthRequestOptions, _super);
    function AuthRequestOptions() {
        var _this = _super.call(this) || this;
        var token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__user_service__["b" /* TOKEN_NAME */]);
        if (token) {
            console.log(_this.headers, token);
            _this.headers.append(HEADER_KEY_AUTH, PREFIX_AUTH + " " + token);
        }
        return _this;
    }
    return AuthRequestOptions;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BaseRequestOptions */]));

//# sourceMappingURL=auth-request.js.map

/***/ }),

/***/ "../../../../../src/app/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.API_ENDPOINT = 'https://intigradhost.com/apidirect/api/';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div_img {\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"row\" >\n    <div class=\"col-md-6 col-md-offset-3\">\n      <app-notification></app-notification>\n    </div>\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-6 col-md-offset-3\">\n    <div class=\"card\">\n      <div class=\"card-header\" data-background-color=\"blue\">\n        <h4>\n          Login\n          <small>This page is restricted</small>\n        </h4>\n      </div>\n\n      <div class=\"card-content\">\n\n        <div class=\"row\">\n          <div class=\"col-md-6 div_img col-md-offset-3\">\n            <img src=\"https://intigradhost.com/lib/images/logo.jpg\" width=\"100px\" />\n          </div>\n        </div>\n        <div class=\"row\">\n\n          <div class=\"col-sm-12\">\n            <div class=\"form-group label-floating\" [class.has-error]=\"submitted && error.username.length > 0\"\n              [class.has-success]=\"submitted && error.username.length <= 0\">\n              <label class=\"control-label\">Email Address: </label>\n              <input type=\"email\" class=\"form-control\" name=\"emailAddress\" placeholder=\"enter email address\" [(ngModel)]=\"user.username\" required />\n              <span class=\"material-icons form-control-feedback\" *ngIf=\"submitted && error.username.length > 0\">clear</span>\n              <span class=\"form-control-feedback\" *ngIf=\"submitted && error.username.length <= 0\"><i class=\"material-icons\">done</i></span>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12\">\n            <div class=\"form-group label-floating\" [class.has-error]=\"submitted && error.password.length > 0\"\n              [class.has-success]=\"submitted && error.password.length <= 0\">\n              <label class=\"control-label\">Password: </label>\n              <input type=\"password\" class=\"form-control\" name=\"emailPassword\" placeholder=\"enter password\" [(ngModel)]=\"user.password\" required />\n              <span class=\"material-icons form-control-feedback\" *ngIf=\"submitted && error.password.length > 0\">clear</span>\n              <span class=\"form-control-feedback\" *ngIf=\"submitted && error.password.length <= 0\"><i class=\"material-icons\">done</i></span>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success btn-md btn-block\" (click)=\"authenticateUser()\">SIGN IN</button>\n        <div class=\"text-center btn-block\">\n          <a routerLink=\"\" class=\"btn btn-info\">FORGOT PASSWORD</a>\n          <a routerLink=\"system/authenticated/user/profile\" class=\"btn btn-info\">NEW USER? SIGN UP</a>\n        </div>\n      </div>\n      <div class=\"my-3\">\n        <div class=\"py-3\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(_userService, notification, router) {
        this._userService = _userService;
        this.notification = notification;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_User__["a" /* User */]();
        this.error = new __WEBPACK_IMPORTED_MODULE_2__models_User__["a" /* User */]();
        this.isValid = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.checkForm = function () {
        this.error.username = (this.user.username.trim().length > 0) ? '' : 'enter username / email';
        this.error.password = (this.user.password.trim().length > 0) ? '' : 'enter password';
        this.isValid = (this.error.username || this.error.password) ? false : true;
    };
    LoginComponent.prototype.authenticateUser = function () {
        var _this = this;
        this.submitted = true;
        this.checkForm();
        if (this.isValid) {
            this._userService
                .authenticateUser(this.user).subscribe(function (data) {
                _this._userService.setToken(data.id_token);
            }, function (err) {
                if (err.error['invalid']) {
                    _this.notification.clearMessage();
                    _this.notification.postMessage('Info alert', 'User ' + err.error.invalid + ' does not exist or Password Mismatch!', __WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* AlertType */].ERROR);
                }
                console.log(err);
            }, function () {
                _this.router.navigate(['system/authenticated/user/profile']);
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["c" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__notification_service__["b" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__notification_service__["b" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(authService, router, notification) {
        this.authService = authService;
        this.router = router;
        this.notification = notification;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.signOut().subscribe(function () {
            // move to the login page
            _this.notification.postMessage('info alert', 'Successfully Signed Out!', __WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* AlertType */].SUCCESS);
            _this.router.navigate(['system/authentication/login']);
        });
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-logout',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["c" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__notification_service__["b" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__notification_service__["b" /* NotificationService */]) === "function" && _c || Object])
], LogoutComponent);

var _a, _b, _c;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/Booking.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Booking; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Person__ = __webpack_require__("../../../../../src/app/models/Person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__("../../../../../src/app/models/User.ts");


var Booking = (function () {
    function Booking() {
        this.domainRegistrant = new __WEBPACK_IMPORTED_MODULE_0__Person__["a" /* Person */]();
        this.domainRegistrant.personType = 'Domain Registrant';
        this.person = new __WEBPACK_IMPORTED_MODULE_0__Person__["a" /* Person */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_1__User__["a" /* User */]();
    }
    return Booking;
}());

//# sourceMappingURL=Booking.js.map

/***/ }),

/***/ "../../../../../src/app/models/Person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var Person = (function () {
    function Person() {
        this.id = 0;
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.phoneNumber = '';
        this.companyName = '';
        this.streetAddress = '';
        this.streetAddressTwo = '';
        this.city = '';
        this.state = '';
        this.postcode = '';
        this.country = '';
        this.personType = 'Normal Person';
    }
    return Person;
}());

//# sourceMappingURL=Person.js.map

/***/ }),

/***/ "../../../../../src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.password = '';
        this.username = '';
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/app/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotificationServiceAlertType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationServiceAlertType = (function () {
    function NotificationServiceAlertType(icon, style) {
        this.icon = icon || 'error_outline';
        this.style = style || 'alert-danger';
    }
    return NotificationServiceAlertType;
}());

var AlertType = (function () {
    function AlertType() {
    }
    return AlertType;
}());

AlertType.INFO = new NotificationServiceAlertType('info_outline', 'alert alert-info');
AlertType.WARNING = new NotificationServiceAlertType('warning', 'alert alert-warning');
AlertType.SUCCESS = new NotificationServiceAlertType('check', 'alert alert-success');
AlertType.ERROR = new NotificationServiceAlertType('error_outline', 'alert alert-danger');
var NotificationService = (function () {
    function NotificationService() {
        this.alertType = AlertType.ERROR;
    }
    NotificationService.prototype.postMessage = function (title, message, alertType) {
        if (title === void 0) { title = ''; }
        if (message === void 0) { message = ''; }
        this.message = message;
        this.title = title;
        this.messageAvailable = true;
        this.alertType = alertType || AlertType.ERROR;
    };
    NotificationService.prototype.clearMessage = function () {
        this.title = '';
        this.message = '';
        this.messageAvailable = false;
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class]=\"notification.alertType.style\" *ngIf=\"notification.messageAvailable\">\n  <div class=\"container-fluid\">\n    <div class=\"alert-icon\">\n    <i class=\"material-icons\">{{ notification.alertType.icon }}</i>\n    </div>\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"notification.clearMessage()\">\n    <span aria-hidden=\"true\"><i class=\"material-icons\">clear</i></span>\n    </button>\n    <b>{{ notification.title }}:</b> {{ notification.message }}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = (function () {
    function NotificationComponent(notification) {
        this.notification = notification;
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-notification',
        template: __webpack_require__("../../../../../src/app/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notification/notification.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notification_service__["b" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notification_service__["b" /* NotificationService */]) === "function" && _a || Object])
], NotificationComponent);

var _a;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/person-form-component/person-form-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/person-form-component/person-form-component.component.html":
/***/ (function(module, exports) {

module.exports = "<h6>PERSONAL INFORMATION</h6>\n<div class=\"row\">\n\n  <div class=\"col-sm-6\">\n    <div class=\"form-group label-floating\" [class.has-error]=\"submitted && error.firstname\" [class.has-success]=\"submitted && !error.firstname\">\n      <label class=\"control-label\">Firstname: </label>\n      <input type=\"text\" class=\"form-control\" name=\"fname\" placeholder=\"enter firstname\" [(ngModel)]=\"person.firstname\" required />\n      <span class=\"material-icons form-control-feedback\" *ngIf=\"submitted && error.firstname\">clear</span>\n      <span class=\"form-control-feedback\" *ngIf=\"submitted && !error.firstname\"><i class=\"material-icons\">done</i></span>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <div class=\"form-group label-floating\" [class.has-error]=\"submitted && error.lastname\" [class.has-success]=\"submitted && !error.lastname\">\n      <label class=\"control-label\">Lastname: </label>\n      <input type=\"text\" class=\"form-control\" name=\"lname\" placeholder=\"enter lastname\" [(ngModel)]=\"person.lastname\" required />\n      <span class=\"material-icons form-control-feedback\" *ngIf=\"submitted && error.lastname\">clear</span>\n      <span class=\"form-control-feedback\" *ngIf=\"submitted && !error.lastname\"><i class=\"material-icons\">done</i></span>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-6\">\n    <div class=\"form-group label-floating\" [class.has-error]=\"submitted && error.email\" [class.has-success]=\"submitted && !error.email\">\n      <label class=\"control-label\">Email Address: </label>\n      <input type=\"email\" class=\"form-control\" name=\"emailAddress\" placeholder=\"enter email address\" [(ngModel)]=\"person.email\" required />\n      <span class=\"material-icons form-control-feedback\" *ngIf=\"submitted && error.email\">clear</span>\n      <span class=\"form-control-feedback\" *ngIf=\"submitted && !error.email\"><i class=\"material-icons\">done</i></span>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"form-group label-floating\" [class.has-error]=\"submitted && error.phoneNumber\" [class.has-success]=\"submitted && !error.phoneNumber\">\n      <label class=\"control-label\">Phone Number: </label>\n      <input type=\"tel\" class=\"form-control\" name=\"telNumber\" placeholder=\"enter phone number\" [(ngModel)]=\"person.phoneNumber\" required />\n      <span class=\"material-icons form-control-feedback\" *ngIf=\"submitted && error.phoneNumber\">clear</span>\n      <span class=\"form-control-feedback\" *ngIf=\"submitted && !error.phoneNumber\"><i class=\"material-icons\">done</i></span>\n    </div>\n  </div>\n\n</div>\n\n<hr>\n<h6>CONTACT ADDRESS</h6>\n<div class=\"row\">\n\n  <div class=\"col-md-12\">\n    <div class=\"form-group label-floating\" [class.has-success]=\"submitted\">\n      <label class=\"control-label\">Company Name: <small>(OPTIONAL)</small></label>\n      <input type=\"text\" class=\"form-control\" name=\"compName\" placeholder=\"enter company name\" [(ngModel)]=\"person.companyName\" />\n      <span class=\"form-control-feedback\" *ngIf=\"submitted\"><i class=\"material-icons\">done</i></span>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group label-floating\" [class.has-error]=\"submitted && error.streetAddress\" [class.has-success]=\"submitted && !error.streetAddress\">\n      <label class=\"control-label\">Street Address: </label>\n      <input type=\"text\" class=\"form-control\" name=\"streetAddress\" placeholder=\"enter street address\" [(ngModel)]=\"person.streetAddress\" required />\n      <span class=\"material-icons form-control-feedback\" *ngIf=\"submitted && error.streetAddress\">clear</span>\n      <span class=\"form-control-feedback\" *ngIf=\"submitted && !error.streetAddress\"><i class=\"material-icons\">done</i></span>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"form-group label-floating\" [class.has-error]=\"submitted && error.streetAddressTwo\" [class.has-success]=\"submitted && !error.streetAddressTwo\">\n      <label class=\"control-label\">Street Address (2): </label>\n      <input type=\"text\" class=\"form-control\" name=\"streetAddressTwo\" placeholder=\"enter street address (2)\" [(ngModel)]=\"person.streetAddressTwo\" />\n      <span class=\"material-icons form-control-feedback\" *ngIf=\"submitted && error.streetAddressTwo\">clear</span>\n      <span class=\"form-control-feedback\" *ngIf=\"submitted && !error.streetAddressTwo\"><i class=\"material-icons\">done</i></span>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"form-group label-floating\" [class.has-error]=\"submitted && error.postcode\" [class.has-success]=\"submitted && !error.postcode\">\n      <label class=\"control-label\">Postcode: </label>\n      <input type=\"text\" class=\"form-control\" name=\"postcode\" placeholder=\"enter postcode\" [(ngModel)]=\"person.postcode\" />\n      <span class=\"material-icons form-control-feedback\" *ngIf=\"submitted && error.postcode\">clear</span>\n      <span class=\"form-control-feedback\" *ngIf=\"submitted && !error.postcode\"><i class=\"material-icons\">done</i></span>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group label-floating\" [class.has-error]=\"submitted && error.city\" [class.has-success]=\"submitted && !error.city\">\n      <label class=\"control-label\">City: </label>\n      <input type=\"text\" class=\"form-control\" name=\"city\" placeholder=\"enter city\" [(ngModel)]=\"person.city\" required />\n      <span class=\"material-icons form-control-feedback\" *ngIf=\"submitted && error.city\">clear</span>\n      <span class=\"form-control-feedback\" *ngIf=\"submitted && !error.city\"><i class=\"material-icons\">done</i></span>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"form-group label-floating\" [class.has-error]=\"submitted && error.state\" [class.has-success]=\"submitted && !error.state\">\n      <label class=\"control-label\">State: </label>\n      <input type=\"text\" class=\"form-control\" name=\"state\" placeholder=\"enter state\" [(ngModel)]=\"person.state\" required />\n      <span class=\"material-icons form-control-feedback\" *ngIf=\"submitted && error.state\">clear</span>\n      <span class=\"form-control-feedback\" *ngIf=\"submitted && !error.state\"><i class=\"material-icons\">done</i></span>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"form-group label-floating\" [class.has-error]=\"submitted && error.country\" [class.has-success]=\"submitted && !error.country\">\n      <label class=\"control-label\">Country: </label>\n      <input type=\"text\" class=\"form-control\" name=\"country\" placeholder=\"enter country\" [(ngModel)]=\"person.country\" required />\n      <span class=\"material-icons form-control-feedback\" *ngIf=\"submitted && error.country\">clear</span>\n      <span class=\"form-control-feedback\" *ngIf=\"submitted && !error.country\"><i class=\"material-icons\">done</i></span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/person-form-component/person-form-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonFormComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Person__ = __webpack_require__("../../../../../src/app/models/Person.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonFormComponentComponent = (function () {
    function PersonFormComponentComponent() {
        this.submitted = false;
        this.error = new __WEBPACK_IMPORTED_MODULE_1__models_Person__["a" /* Person */]();
    }
    PersonFormComponentComponent.prototype.checkFormIsValid = function () {
        this.submitted = true;
        this.error.city = (this.person.city.trim().length <= 0) ? 'enter a city' : '';
        this.error.country = (this.person.country.trim().length <= 0) ? 'enter a country' : '';
        this.error.email = (this.person.email.trim().length <= 0) ? 'enter a valid email' : '';
        this.error.firstname = (this.person.firstname.trim().length <= 0) ? 'enter firstname' : '';
        this.error.lastname = (this.person.lastname.trim().length <= 0) ? 'enter lastname' : '';
        this.error.phoneNumber = (this.person.phoneNumber.trim().length <= 0) ? 'enter phone number' : '';
        this.error.postcode = (this.person.postcode.trim().length <= 0) ? 'enter postcode' : '';
        this.error.state = (this.person.state.trim().length <= 0) ? 'enter state' : '';
        this.error.streetAddress = (this.person.streetAddress.trim().length <= 0) ? 'enter street address' : '';
        this.error.streetAddressTwo = (this.person.streetAddressTwo.trim().length <= 0) ? 'enter street address (2)' : '';
        return (this.error.city || this.error.country || this.error.email || this.error.firstname || this.error.lastname
            || this.error.phoneNumber || this.error.postcode || this.error.state || this.error.streetAddress || this.error.streetAddressTwo) ? false : true;
    };
    PersonFormComponentComponent.prototype.ngOnInit = function () {
    };
    return PersonFormComponentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('person'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_Person__["a" /* Person */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_Person__["a" /* Person */]) === "function" && _a || Object)
], PersonFormComponentComponent.prototype, "person", void 0);
PersonFormComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-person-form-component',
        template: __webpack_require__("../../../../../src/app/person-form-component/person-form-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/person-form-component/person-form-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PersonFormComponentComponent);

var _a;
//# sourceMappingURL=person-form-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                  <span class=\"sr-only\">Toggle navigation</span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">INTIGRADEHOST</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n            <!--\n            <li class=\"active\">\n              <a href=\"#\">My Profile</a>\n            </li>\n            -->\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">My Profile <b class=\"caret\"></b></a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"active\"><a routerLink=\"/system/authenticated/user/profile\">My Profile</a></li>\n                <li class=\"divider\"></li>\n                <li><a routerLink=\"/system/authentication/logout\">Sign Out</a></li>\n                <!--\n                <li><a href=\"#\">Action</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something else here</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\">Separated link</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\">One more separated link</a></li>\n                -->\n              </ul>\n            </li>\n          </ul>\n        </div>\n    </div>\n  </nav>\n\n<div class=\"row\">\n  <div class=\"card card-nav-tabs\">\n    <div class=\"card-header\" data-background-color=\"purple\">\n      <div class=\"nav-tabs-navigation\">\n        <div class=\"nav-tabs-wrapper\">\n          <span class=\"nav-tabs-title\">USER INFORMATION:</span>\n\n          <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n\n            <li class=\"active\">\n              <a href=\"#biodata\" data-toggle=\"tab\">\n                <i class=\"material-icons\">account_circle</i>\n                BIO DATA\n              <div class=\"ripple-container\"></div></a>\n            </li>\n\n            <li class=\"\">\n              <a href=\"#messages\" data-toggle=\"tab\">\n                <i class=\"material-icons\">contacts</i>\n                PERSONAL ADDRESS INFORMATION\n              <div class=\"ripple-container\"></div></a>\n            </li>\n\n            <li class=\"\">\n              <a href=\"#settings\" data-toggle=\"tab\">\n                <i class=\"material-icons\">group</i>\n                REGISTRANT ADDRESS INFORMATION\n              <div class=\"ripple-container\"></div></a>\n            </li>\n\n          </ul>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card-content\">\n      <div class=\"tab-content\">\n        <div class=\"tab-pane active\" id=\"biodata\">\n\n          <table class=\"table\">\n\n            <tr>\n              <th>Username:</th>\n              <td>{{ person.email }}</td>\n            </tr>\n\n            <tr>\n              <th>Firstname:</th>\n              <td>{{ person.firstname }}</td>\n            </tr>\n\n            <tr>\n              <th>Lastname:</th>\n              <td>{{ person.lastname }}</td>\n            </tr>\n          </table>\n\n        </div>\n        <div class=\"tab-pane\" id=\"messages\">\n          Second Tab\n        </div>\n        <div class=\"tab-pane\" id=\"settings\">\n          Third Tab\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Person__ = __webpack_require__("../../../../../src/app/models/Person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.person = new __WEBPACK_IMPORTED_MODULE_1__models_Person__["a" /* Person */]();
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["c" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"row\">\n\n  <div class=\"col-md-8 col-md-offset-2\">\n    <div class=\"card\">\n      <div class=\"card-header\" data-background-color=\"blue\">\n        <h4>{{ title }}</h4>\n      </div>\n\n      <div class=\"card-content\">\n\n        <div class=\"row\">\n          <div class=\"col-md-3 div_img col-md-offset-4\">\n            <img src=\"https://intigradhost.com/lib/images/logo.jpg\" width=\"50\" />\n          </div>\n        </div>\n\n        <hr>\n        <!-- contact person -->\n        <app-person-form-component [person]=\"booking.person\" #personChild></app-person-form-component>\n\n        <hr>\n        <h6>USER INFORMATION</h6>\n        <div class=\"row\">\n          <p class=\"col-md-6\">\n            Registrant Contact Info:\n          </p>\n          <div class=\"col-md-6\">\n            <label>\n              <input type=\"checkbox\" name=\"optionsCheckboxes\" (change)=\"registrantAvailablilityChange();\" [checked]=\"isRegistrantSame\"> SAME AS ABOVE\n            </label>\n          </div>\n        </div>\n\n        <div *ngIf=\"!isRegistrantSame\">\n          <hr>\n          <!-- contact registrant -->\n          <app-person-form-component [person]=\"booking.domainRegistrant\" #domainRegistrantChild></app-person-form-component>\n        </div>\n\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group label-floating\" [class.has-error]=\"formSubmitted && error.username.length <= 0\"\n              [class.has-success]=\"formSubmitted && error.username.length > 0\">\n              <label class=\"control-label\">Email Address: </label>\n              <input type=\"email\"  class=\"form-control\" name=\"username\" placeholder=\"enter email / username\" [(ngModel)]=\"booking.user.username\" required/>\n              <span class=\"material-icons form-control-feedback\" *ngIf=\"formSubmitted && error.username.length <= 0\">clear</span>\n              <span class=\"form-control-feedback\" *ngIf=\"formSubmitted && error.username.length > 0\"><i class=\"material-icons\">done</i></span>\n            </div>\n          </div>\n\n\n          <div class=\"col-md-6\">\n            <div class=\"form-group label-floating\" [class.has-error]=\"formSubmitted && error.password.length <= 0\"\n              [class.has-success]=\"formSubmitted && error.password.length > 0\">\n              <label class=\"control-label\">Password: </label>\n              <input type=\"password\"  class=\"form-control\" name=\"userPassword\" placeholder=\"enter email password\" [(ngModel)]=\"booking.user.password\" required/>\n              <span class=\"material-icons form-control-feedback\" *ngIf=\"formSubmitted && error.password.length <= 0\">clear</span>\n              <span class=\"form-control-feedback\" *ngIf=\"formSubmitted && error.password.length > 0\"><i class=\"material-icons\">done</i></span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success btn-md btn-block\" (click)=\"saveClicked()\">SIGN UP</button>\n      </div>\n      <br />\n    </div>\n\n    <div class=\"row\">\n      <a href=\"#\" class=\"col-sm-12 text-center\">Already own an account? LOGIN</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Booking__ = __webpack_require__("../../../../../src/app/models/Booking.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_form_component_person_form_component_component__ = __webpack_require__("../../../../../src/app/person-form-component/person-form-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = (function () {
    function RegistrationComponent() {
        this.title = "Sign Up";
        this.isRegistrantSame = true;
        this.formSubmitted = false;
        this.formValid = false;
        this.booking = new __WEBPACK_IMPORTED_MODULE_1__models_Booking__["a" /* Booking */]();
        this.formSubmitBtnClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.error = new __WEBPACK_IMPORTED_MODULE_3__models_User__["a" /* User */]();
    }
    RegistrationComponent.prototype.registrantAvailablilityChange = function () {
        this.isRegistrantSame = this.isRegistrantSame ? false : true;
    };
    RegistrationComponent.prototype.checkUserForm = function () {
        this.error.password = (this.booking.user.password.trim().length <= 0) ? 'enter password' : '';
        this.error.username = (this.booking.user.username.trim().length <= 0) ? 'enter username / email' : '';
        return !(this.error.password || this.error.username);
    };
    RegistrationComponent.prototype.saveClicked = function () {
        // check registration form
        this.formSubmitted = true;
        console.log(this.error);
        this.formValid = this.personChild.checkFormIsValid() && this.checkUserForm();
        if (!this.isRegistrantSame) {
            this.formValid = this.formValid && this.domainRegistrantChild.checkFormIsValid();
        }
        console.log(this.formValid, this.booking);
    };
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    return RegistrationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('personChild'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__person_form_component_person_form_component_component__["a" /* PersonFormComponentComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__person_form_component_person_form_component_component__["a" /* PersonFormComponentComponent */]) === "function" && _a || Object)
], RegistrationComponent.prototype, "personChild", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('domainRegistrantChild'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__person_form_component_person_form_component_component__["a" /* PersonFormComponentComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__person_form_component_person_form_component_component__["a" /* PersonFormComponentComponent */]) === "function" && _b || Object)
], RegistrationComponent.prototype, "domainRegistrantChild", void 0);
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegistrationComponent);

var _a, _b;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard__ = __webpack_require__("../../../../../src/app/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");





var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'system/authenticated/user/profile', component: __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]] },
    { path: 'system/authentication/login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'system/authentication/logout', component: __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'system/authentication/registration', component: __WEBPACK_IMPORTED_MODULE_1__registration_registration_component__["a" /* RegistrationComponent */] },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOKEN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthResponseStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TOKEN_NAME = 'jwt_token';
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Accept': 'application/json', })
};
var AuthResponseStatus;
(function (AuthResponseStatus) {
    AuthResponseStatus[AuthResponseStatus["SESSION_EXPIRED"] = 0] = "SESSION_EXPIRED";
    AuthResponseStatus[AuthResponseStatus["FRESH_USER"] = 1] = "FRESH_USER";
    AuthResponseStatus[AuthResponseStatus["SIGNED_IN"] = 2] = "SIGNED_IN";
})(AuthResponseStatus || (AuthResponseStatus = {}));
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.isLoggedIn = false;
        this.authStatus = AuthResponseStatus.FRESH_USER;
    }
    // login user
    UserService.prototype.authenticateUser = function (userDetails) {
        var username = userDetails.username;
        var password = userDetails.password;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* AppSettings */].API_ENDPOINT + 'api/authentication/login', JSON.stringify({ username: username, password: password }));
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_NAME);
    };
    UserService.prototype.setToken = function (param) {
        localStorage.setItem(TOKEN_NAME, param);
    };
    UserService.prototype.signOut = function () {
        localStorage.clear();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* AppSettings */].API_ENDPOINT + 'api/authentication/logout');
    };
    UserService.prototype.getTokenExiprationDate = function (token) {
        var decoded = __WEBPACK_IMPORTED_MODULE_2_jwt_decode__(token);
        if (decoded['exp'] === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded['exp']);
        return date;
    };
    UserService.prototype.isTokenExpired = function (token) {
        if (!token)
            token = this.getToken();
        if (!token)
            return true;
        var date = this.getTokenExiprationDate(token);
        if (date === undefined)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map