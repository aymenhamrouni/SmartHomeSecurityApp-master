webpackJsonp([6],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error__ = __webpack_require__(275);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VisitService = (function (_super) {
    __extends(VisitService, _super);
    function VisitService(_http) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        _this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*', 'Access-Control-Allow-Headers': '*' });
        _this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: _this.headers });
        return _this;
    }
    VisitService.prototype.CreateVisit = function (visit) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_1__environment__["a" /* environment */].endpoint + '/Visits/CreateVisit', visit, this.options).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (response) { return response.json(); }), Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["catchError"])(this.handleError)).do(function (response) { return console.log(response); });
    };
    VisitService.prototype.GetVisits = function (Email) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_1__environment__["a" /* environment */].endpoint + '/Users/GetVisits/' + Email, this.options).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (response) { return response.json(); }), Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["catchError"])(this.handleError)).do(function (response) { return console.log(response); });
    };
    return VisitService;
}(__WEBPACK_IMPORTED_MODULE_4__error__["a" /* ErrorService */]));
VisitService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], VisitService);

//# sourceMappingURL=visit.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    endpoint: 'https://localhost:8443'
    //endpoint: 'http://localhost:50775/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(nav, _global) {
        this.nav = nav;
        this._global = _global;
        this.username = this._global.UserName;
        this.location = this._global.UserLocation;
    }
    // logout
    SettingsPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\settings\settings.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border">\n    <ion-title>\n      <ion-icon name="cog"></ion-icon>\n      <span >Configuración</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n\n  <ion-item-group>\n  <!--ion-item-divider color="secondary" class="bold">Configuración</ion-item-divider>\n    <ion-item>\n      <ion-label>Language</ion-label>\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n        <ion-option value="en-GB">English (UK)</ion-option>\n        <ion-option value="en-CA">English (CA)</ion-option>\n        <ion-option value="en-AU">English (AU)</ion-option>\n        <ion-option value="en-IN">English (IN)</ion-option>\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Currency</ion-label>\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n        <ion-option value="EUR">Euro (€)</ion-option>\n        <ion-option value="GBP">Pound (£)</ion-option>\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item-->\n      <!--ion-label>Units</ion-label>\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n        <ion-option value="M" selected="true">Miles (ft²)</ion-option>\n        <ion-option value="K">Kilometers (m²)</ion-option>\n      </ion-select>\n    </ion-item-->\n    <ion-item>\n      <ion-label>Notificaciones</ion-label>\n      <ion-toggle color="green" checked="true"></ion-toggle>\n    </ion-item>\n    <ion-item>\n        <span>Acerca de</span>\n      </ion-item>\n      <ion-item>\n          <span>Politíca de Privacidad</span>\n        </ion-item>\n  </ion-item-group>\n  <!-- App settings>\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n    <ion-item>\n      <span>Clear Private Data</span>\n    </ion-item>\n    <ion-item>\n      <ion-label>Push Notifications?</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span>Privacy Policy</span>\n    </ion-item>\n  </ion-item-group>\n  <button-- ion-button color="primary" full tappable (click)="logout()">CERRAR SESIÓN</button-->\n\n</ion-content>\n'/*ion-inline-end:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__services_global__["a" /* GlobalService */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__codigo_qr_codigo_qr__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_visit__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VisitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisitsPage = (function () {
    function VisitsPage(nav, navParams, _service, _global, toastCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this._service = _service;
        this._global = _global;
        this.toastCtrl = toastCtrl;
        this.items = [];
        this.userEmail = this._global.UserEmail;
        this.ionViewDidLoad();
    }
    VisitsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.userEmail != null || this.userEmail != '') {
            this._service.GetVisits(this.userEmail).subscribe(function (d) {
                _this.items = d;
            });
        }
        else {
            this.useToast('No se encontraron registros', 1500);
        }
    };
    VisitsPage.prototype.itemSelected = function (d) {
        console.log(d);
        var QR = d.qrGuid;
        if (QR.length > 0) {
            this._global.tempQRGuid = d.qrGuid;
            this._global.tempVisitorName = d.name;
            if (d.type == '1') {
                this._global.tempVisitorDate = this.formatDate(d.visitDate);
                this._global.tempVisitorInitialDate = '';
                this._global.tempVisitorFinalDate = '';
            }
            else {
                this._global.tempVisitorDate = '';
                this._global.tempVisitorInitialDate = this.formatDate(d.initialDate);
                this._global.tempVisitorFinalDate = this.formatDate(d.expirationDate);
            }
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__codigo_qr_codigo_qr__["a" /* CodigoQrPage */]);
        }
        else {
            this.useToast('Ocurrio un error al leer el detalle de la visita, favor de intentar nuevamente', 1500);
        }
    };
    VisitsPage.prototype.useToast = function (msg, time) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time,
            position: 'top',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    };
    VisitsPage.prototype.formatDate = function (f) {
        var date = new Date(f);
        var monthNames = [
            "Ene", "Feb", "Mar",
            "Abr", "May", "Jun", "Jul",
            "Ago", "Sep", "Oct",
            "Nov", "Dec"
        ];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    };
    return VisitsPage;
}());
VisitsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-visits',template:/*ion-inline-start:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\visits\visits.html"*/'<!--\n  Generated template for the VisitsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <ion-title>Registro de Visitas</ion-title>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="common-page">\n\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item.creationDate | date:\'dd/MMM/yyyy\' }} | {{ item.name }}\n    </button>  \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\visits\visits.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_visit__["a" /* VisitService */], __WEBPACK_IMPORTED_MODULE_1__services_global__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* ToastController */]])
], VisitsPage);

//# sourceMappingURL=visits.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_visit__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codigo_qr_codigo_qr__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddUserPage = (function () {
    function AddUserPage(nav, navParams, alertCtrl, toastCtrl, _service, _global) {
        this.nav = nav;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this._service = _service;
        this._global = _global;
        this.pageTitle = "Acceso";
        this.visit = {};
        this.accesoForm = {};
        this.recurrente = false;
        this.username = this._global.UserName;
        this.useremail = this._global.UserEmail;
        this.location = this._global.UserLocation;
        this.accesoForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].maxLength(200),
            ])),
            car: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].maxLength(100),
            ])),
            plates: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].maxLength(10),
            ])),
            type: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            notes: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].maxLength(100)),
            visitDate: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](''),
            initialDate: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](''),
            expirationDate: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('')
        });
    }
    AddUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddUserPage');
    };
    // to go account page
    AddUserPage.prototype.goToAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
    };
    AddUserPage.prototype.configuraFechas = function (tipo) {
        if (tipo == 1)
            this.recurrente = false;
        if (tipo == 2)
            this.recurrente = true;
    };
    AddUserPage.prototype.CrearVisita = function () {
        var _this = this;
        if (this.Validate()) {
            this._service.CreateVisit(this.visit).subscribe(function (d) {
                _this.r = _this.confirmResponse(d);
                if (_this.r) {
                    _this._global.tempQRGuid = d.qrGuid;
                    _this._global.tempVisitorName = d.name;
                    if (d.type == '1') {
                        _this._global.tempVisitorDate = _this.formatDate(d.visitDate);
                        _this._global.tempVisitorInitialDate = '';
                        _this._global.tempVisitorFinalDate = '';
                    }
                    else {
                        _this._global.tempVisitorDate = '';
                        _this._global.tempVisitorInitialDate = _this.formatDate(d.initialDate);
                        _this._global.tempVisitorFinalDate = _this.formatDate(d.expirationDate);
                    }
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__codigo_qr_codigo_qr__["a" /* CodigoQrPage */]);
                }
            });
        }
        else {
            this.useToast('Favor de capturar los campos requeridos marcados con *', 3000);
        }
    };
    AddUserPage.prototype.Validate = function () {
        console.log(this.accesoForm.invalid);
        if (this.accesoForm.invalid)
            return false;
        else {
            if (this.accesoForm.controls.type.value == '1' && this.accesoForm.controls.visitDate.value == '') {
                this.useToast('Favor de capturar la fecha de la visita.', 3000);
                return false;
            }
            else if (this.accesoForm.controls.type.value == '2') {
                if (this.accesoForm.controls.initialDate.value == '' || this.accesoForm.controls.expirationDate.value == '') {
                    this.useToast('Favor de capturar ambas fechas del periodo de la visita.', 3000);
                    return false;
                }
                var FechaInicio = new Date(this.accesoForm.controls.initialDate.value);
                var FechaFin = new Date(this.accesoForm.controls.expirationDate.value);
                if (FechaInicio > FechaFin) {
                    this.useToast('La fecha de inicio no puede ser mayor que la fecha de término.', 3000);
                    return false;
                }
                else {
                    this.configuraObjetoVisita();
                    return true;
                }
            }
            else {
                this.configuraObjetoVisita();
                return true;
            }
        }
    };
    AddUserPage.prototype.configuraObjetoVisita = function () {
        this.visit = {
            Id: 0,
            QRGuid: '',
            UserEmail: this._global.UserEmail,
            UserAddress: this._global.UserLocation,
            Name: this.accesoForm.controls.name.value,
            Car: this.accesoForm.controls.car.value,
            Plates: this.accesoForm.controls.plates.value,
            Notes: this.accesoForm.controls.notes.value,
            Type: this.accesoForm.controls.type.value,
            VisitDate: this.accesoForm.controls.visitDate.value != '' ? this.accesoForm.controls.visitDate.value : '2000-01-01',
            InitialDate: this.accesoForm.controls.initialDate.value != '' ? this.accesoForm.controls.initialDate.value : '2000-01-01',
            ExpirationDate: this.accesoForm.controls.expirationDate.value != '' ? this.accesoForm.controls.expirationDate.value : '2000-01-01'
        };
    };
    AddUserPage.prototype.useToast = function (msg, time) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time,
            position: 'top',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    };
    AddUserPage.prototype.confirmResponse = function (data) {
        console.log('server response:' + data);
        if (data.qrGuid != '') {
            this.useToast('¡Registro creado correctamente!', 5000);
            return true;
        }
        else {
            this.useToast('Ocurrio un error. Favor de intentar de nuevo', 3000);
            return false;
        }
    };
    AddUserPage.prototype.acortaFecha = function (str) {
        str = str.substring(0, str.indexOf('T') - 1);
        return str;
    };
    AddUserPage.prototype.formatDate = function (f) {
        var date = new Date(f);
        var monthNames = [
            "Ene", "Feb", "Mar",
            "Abr", "May", "Jun", "Jul",
            "Ago", "Sep", "Oct",
            "Nov", "Dec"
        ];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    };
    return AddUserPage;
}());
AddUserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'page-addUser',template:/*ion-inline-start:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\addUser\addUser.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <p>{{location}}</p>\n    </ion-title>\n<!--     <ion-buttons end>\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n<!-- -->\n<ion-content padding class="animated fadeIn form-page">\n  <div text-center class="animated fadeInDown">\n    <h5 ion-text class="text-primary">\n      <strong>Registro de Visitas</strong>\n    </h5>\n  </div>\n  <!-- Login form -->\n  <div class="list-form" [formGroup]="accesoForm">\n\n    <ion-list radio-group formControlName="type">\n      <ion-item>\n        <ion-label>Tipo de Visita *</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Visita Unica</ion-label>\n        <ion-radio value="1" (click)="configuraFechas(1)" checked></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Visita Recurrente</ion-label>\n        <ion-radio value="2" (click)="configuraFechas(2)"></ion-radio>\n      </ion-item>\n      <!--<ion-item>\n                  <ion-label>Visita Grupal</ion-label>\n                  <ion-radio value="3" (click)="configuraFechas(3)"></ion-radio>\n                </ion-item>-->\n    </ion-list>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="person" item-start class="text-primary"></ion-icon>\n        Nombre *\n      </ion-label>\n      <ion-input type="text" formControlName="name"></ion-input>\n    </ion-item>\n \n    <ion-item>        \n      <ion-label floating>\n        <ion-icon name="car" item-start class="text-primary"></ion-icon>\n        Auto        \n      </ion-label>\n      <ion-input type="text" formControlName="car"></ion-input> \n    </ion-item>\n\n    <ion-item>        \n      <ion-label floating>\n        <ion-icon name="barcode" item-start class="text-primary"></ion-icon>\n        Placas\n      </ion-label>\n      <ion-input type="text" formControlName="plates"></ion-input> \n    </ion-item>\n\n    <ion-item>        \n        <ion-label>\n          No se los datos / Sin Vehículo\n        </ion-label>\n        <ion-checkbox id="naVehiculo"></ion-checkbox>\n    </ion-item>\n\n    <ion-item [hidden]=recurrente>\n      <ion-label floating>\n        Fecha de Visita *\n        <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n      </ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" formControlName="visitDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item [hidden]=!recurrente>\n      <ion-label floating>\n        Fecha de Inicio *\n        <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n      </ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" formControlName="initialDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item [hidden]=!recurrente>\n      <ion-label floating>\n        Fecha de Fin *\n        <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n      </ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" formControlName="expirationDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="reorder" item-start class="text-primary"></ion-icon>\n        Notas\n      </ion-label>\n      <ion-input type="text" formControlName="notes"></ion-input>\n    </ion-item>\n\n    <div>\n      <button ion-button icon-start block color="dark" tappable (click)="CrearVisita()">\n        <ion-icon name="log-in"></ion-icon>\n        REGISTRAR\n      </button>\n\n    </div>\n\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\addUser\addUser.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__services_visit__["a" /* VisitService */], __WEBPACK_IMPORTED_MODULE_0__services_global__["a" /* GlobalService */]])
], AddUserPage);

//# sourceMappingURL=addUser.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiresensorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more___default()(__WEBPACK_IMPORTED_MODULE_2_highcharts___default.a);
var FiresensorsPage = (function () {
    function FiresensorsPage(navCtrl, loadingCtrl, socket, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.socket = socket;
        this.navParams = navParams;
        this.data2 = [0, 0];
        this.data = 0;
        this.i = 1;
        this.data2 = [(new Date()).getTime(), 0];
        this.carbMono = navParams.get("mono");
        this.carbDuo = navParams.get("duo");
        this.temp = navParams.get("duo");
        this.socket.connect();
        if (this.carbMono == 0) {
            var loading_1 = this.loadingCtrl.create({
                spinner: "ios",
                content: "Please wait..."
            });
            loading_1.present();
            setTimeout(function () {
                loading_1.dismiss();
            }, 5000);
        }
        //this.carbMono = 0;
        //this.carbDuo = 0;
    }
    FiresensorsPage.prototype.ionViewDidLoad = function () {
        __WEBPACK_IMPORTED_MODULE_2_highcharts___default.a.chart(this.container.nativeElement, {
            chart: {
                type: "gauge",
                height: "80%",
                backgroundColor: null,
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                style: {
                    fontFamily: 'Verdana, sans-serif',
                    color: '#000000',
                    fontWeight: 'bold',
                    fontSize: "15px"
                },
                text: "Carbon Monoxide Level",
                y: 30
            },
            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [
                    {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }
                            //  stops: [[0, "#FFF"], [1, "#333"]]
                        },
                        borderWidth: 0,
                        outerRadius: "109%"
                    },
                    {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }
                            // stops: [[0, "#333"], [1, "#FFF"]]
                        },
                        borderWidth: 1,
                        outerRadius: "107%"
                    },
                    {},
                    {
                        // backgroundColor: "#DDD",
                        borderWidth: 0,
                        outerRadius: "105%",
                        innerRadius: "103%"
                    }
                ]
            },
            // the value axis
            yAxis: {
                min: 0,
                max: 50,
                minorTickInterval: "auto",
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: "inside",
                minorTickColor: "#666",
                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: "inside",
                tickLength: 10,
                tickColor: "#666",
                labels: {
                    step: 2,
                    rotation: 0
                },
                title: {
                    text: "PPM"
                },
                plotBands: [
                    {
                        from: 0,
                        to: 10,
                        color: "#55BF3B" // green
                    },
                    {
                        from: 10,
                        to: 25,
                        color: "#DDDF0D" // yellow
                    },
                    {
                        from: 25,
                        to: 50,
                        color: "#DF5353" // red
                    }
                ]
            },
            series: [
                {
                    type: "gauge",
                    name: "CO",
                    data: [this.carbMono],
                    tooltip: {
                        valueSuffix: "PPM"
                    }
                }
            ]
        }, 
        // Add some life
        function (chart) {
            setInterval(function () {
                var _this = this;
                var point = chart.series[0].points[0], newVal;
                this.socket.on("home_1", function (msg) {
                    _this.carbMono = JSON.parse(msg.payload).CarbonMonoxide;
                });
                newVal = this.carbMono;
                this.data = newVal;
                point.update(newVal);
            }, 3000);
        });
        __WEBPACK_IMPORTED_MODULE_2_highcharts___default.a.chart(this.container1.nativeElement, {
            chart: {
                type: "gauge",
                height: "80%",
                backgroundColor: null,
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                style: {
                    fontFamily: 'Verdana, sans-serif',
                    color: '#000000',
                    fontWeight: 'bold',
                    fontSize: "15px"
                },
                text: "Carbon Duoxide Level",
                y: 30
            },
            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [
                    {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }
                            //  stops: [[0, "#FFF"], [1, "#333"]]
                        },
                        borderWidth: 0,
                        outerRadius: "109%"
                    },
                    {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }
                            // stops: [[0, "#333"], [1, "#FFF"]]
                        },
                        borderWidth: 1,
                        outerRadius: "107%"
                    },
                    {},
                    {
                        // backgroundColor: "#DDD",
                        borderWidth: 0,
                        outerRadius: "105%",
                        innerRadius: "103%"
                    }
                ]
            },
            // the value axis
            yAxis: {
                min: 250,
                max: 15000,
                minorTickInterval: "auto",
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: "inside",
                minorTickColor: "#666",
                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: "inside",
                tickLength: 10,
                tickColor: "#666",
                labels: {
                    step: 2,
                    rotation: 0
                },
                title: {
                    text: "PPM"
                },
                plotBands: [
                    {
                        from: 250,
                        to: 1000,
                        color: "#55BF3B" // green
                    },
                    {
                        from: 1000,
                        to: 5000,
                        color: "#DDDF0D" // yellow
                    },
                    {
                        from: 5000,
                        to: 15000,
                        color: "#DF5353" // red
                    }
                ]
            },
            series: [
                {
                    type: "gauge",
                    name: "CO²",
                    data: [this.carbDuo],
                    tooltip: {
                        valueSuffix: "PPM"
                    }
                }
            ]
        }, 
        // Add some life
        function (chart) {
            setInterval(function () {
                var _this = this;
                var point = chart.series[0].points[0], newVal;
                this.socket.on("home_1", function (msg) {
                    _this.carbDuo = JSON.parse(msg.payload).CarbonDioxide;
                });
                newVal = this.carbDuo;
                point.update(newVal);
            }, 3000);
        });
    };
    return FiresensorsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("container", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], FiresensorsPage.prototype, "container", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("container1", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], FiresensorsPage.prototype, "container1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("container2", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], FiresensorsPage.prototype, "container2", void 0);
FiresensorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-firesensors',template:/*ion-inline-start:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\firesensors\firesensors.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <p>Fire/Toxication Sensors</p>\n      </ion-title>\n  <!--     <ion-buttons end>\n        <button ion-button tappable (click)="goToAccount()">\n          <ion-icon name="cog"></ion-icon>\n        </button>\n      </ion-buttons> -->\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class="animated fadeIn common-bg">\n    <h2></h2>\n  \n    <div #container></div>\n    <div #container1></div>\n    <div #container2></div>\n  </ion-content>\n  '/*ion-inline-end:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\firesensors\firesensors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FiresensorsPage);

//# sourceMappingURL=firesensors.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamfeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StreamfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StreamfeedPage = (function () {
    function StreamfeedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StreamfeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StreamfeedPage');
    };
    return StreamfeedPage;
}());
StreamfeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
        selector: 'page-streamfeed',template:/*ion-inline-start:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\streamfeed\streamfeed.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <p>Surveillance Cameras</p>\n    </ion-title>\n<!--     <ion-buttons end>\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <ion-card> \n    <video style="width: 100%; height: 100%" loop autoplay>\n            <source src="../../assets/streamfeeds/door.mp4" type="video/mp4">\n            Your browser does not support playing this Video\n        </video>\n\n        <div class="card-title">Door Camera</div>\n<div class="card-subtitle">Status : GREEN</div>\n</ion-card>\n\n<ion-card> \n    <video style="width: 100%; height: 100%" loop autoplay>\n            <source src="../../assets/streamfeeds/livingroom.mp4" type="video/mp4">\n            Your browser does not support playing this Video\n        </video>\n\n        <div class="card-title">Living Room Camera</div>\n<div class="card-subtitle">Status : GREEN</div>\n</ion-card>\n\n<ion-card> \n    <video style="width: 100%; height: 100%" loop autoplay>\n            <source src="../../assets/streamfeeds/kitchen.mp4" type="video/mp4">\n            Your browser does not support playing this Video\n        </video>\n\n        <div class="card-title">Kitche Camera</div>\n<div class="card-subtitle">Status : GREEN</div>\n</ion-card>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\streamfeed\streamfeed.html"*/,
=======
        selector: 'page-streamfeed',template:/*ion-inline-start:"D:\projet aim\smarthomefullstack\src\pages\streamfeed\streamfeed.html"*/'<!-- -->\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n\n    <ion-title> <p>Surveillance Cameras</p> </ion-title>\n\n    <!--     <ion-buttons end>\n\n      <button ion-button tappable (click)="goToAccount()">\n\n        <ion-icon name="cog"></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <ion-card>\n\n    <video style="width: 100%; height: 100%" loop autoplay>\n\n      <source src="assets/streamfeeds/door.mp4" type="video/mp4" />\n\n      Your browser does not support playing this Video\n\n    </video>\n\n\n\n    <div class="card-title">Door Camera</div>\n\n    <div class="card-subtitle">Status : GREEN</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <video style="width: 100%; height: 100%" loop autoplay>\n\n      <source src="assets/streamfeeds/livingroom.mp4" type="video/mp4" />\n\n      Your browser does not support playing this Video\n\n    </video>\n\n\n\n    <div class="card-title">Living Room Camera</div>\n\n    <div class="card-subtitle">Status : GREEN</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <video style="width: 100%; height: 100%" loop autoplay>\n\n      <source src="assets/streamfeeds/kitchen.mp4" type="video/mp4" />\n\n      Your browser does not support playing this Video\n\n    </video>\n\n\n\n    <div class="card-title">Kitche Camera</div>\n\n    <div class="card-subtitle">Status : GREEN</div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projet aim\smarthomefullstack\src\pages\streamfeed\streamfeed.html"*/,
>>>>>>> 20e15ba0ca80d77103d3c9449727d60e2b2375da
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], StreamfeedPage);

//# sourceMappingURL=streamfeed.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);


var ErrorService = (function () {
    function ErrorService() {
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_0__environment__["a" /* environment */].endpoint;
    }
    ErrorService.prototype.handleError = function (error) {
        alert(error.json().error || 'Cannot Establish Connection with Server');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Cannot Establish Connection with Server');
    };
    return ErrorService;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addUser/addUser.module": [
<<<<<<< HEAD
		750,
=======
		751,
>>>>>>> 20e15ba0ca80d77103d3c9449727d60e2b2375da
		5
	],
	"../pages/codigo-qr/codigo-qr.module": [
		752,
		4
	],
	"../pages/firesensors/firesensors.module": [
		752,
		3
	],
	"../pages/menu/menu.module": [
		753,
		0
	],
	"../pages/streamfeed/streamfeed.module": [
<<<<<<< HEAD
		754,
=======
		756,
>>>>>>> 20e15ba0ca80d77103d3c9449727d60e2b2375da
		2
	],
	"../pages/visits/visits.module": [
		755,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 330;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    function RegisterPage(nav, forgotCtrl, toastCrtl, _service) {
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.toastCrtl = toastCrtl;
        this._service = _service;
        this.pageTitle = "Registration";
        this.user = {};
        this.registerForm = {};
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            homeId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            userName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5)
            ]))
        });
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.ValidateUser() === "allclear") {
            this._service.RegisterUser(this.user).subscribe(function (d) {
                _this.r = _this.confirmResponse(d);
                if (_this.r) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
                }
            });
        }
        else {
            console.log("aaa");
            this.useToast(this.ValidateUser(), 5000);
        }
    };
    RegisterPage.prototype.ValidateUser = function () {
        if (this.registerForm.controls.homeId.invalid)
            return "Home Code is Invalid!";
        else if (this.registerForm.controls.address.invalid)
            return "Address is Invalid!";
        else if (this.registerForm.controls.userName.invalid)
            return "Username is Invalid!";
        else if (this.registerForm.controls.email.invalid)
            return "Email is Invalid!";
        else if (this.registerForm.controls.password.invalid)
            return "Password is Invalid!";
        else {
            this.user = {
                userName: this.registerForm.controls.userName.value,
                email: this.registerForm.controls.email.value,
                password: this.registerForm.controls.password.value,
                address: this.registerForm.controls.address.value,
                homeId: this.registerForm.controls.homeId.value
            };
            return "allclear";
        }
    };
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */], { willingly: true });
    };
    RegisterPage.prototype.useToast = function (msg, time) {
        var toast = this.toastCrtl.create({
            message: msg,
            duration: time,
            position: "top",
            cssClass: "dark-trans",
            closeButtonText: "OK",
            showCloseButton: true
        });
        toast.present();
    };
    RegisterPage.prototype.confirmResponse = function (data) {
        if (data.id) {
            this.useToast("Register was successfull", 5000);
            localStorage.setItem("UserId", data);
            return true;
        }
        else {
            this.useToast(data.err, 5000);
            return false;
        }
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: "page-register",template:/*ion-inline-start:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\register\register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div text-center class="animated fadeInDown">\n        <div class="logo-chico"></div>\n        <h4 ion-text class="text-primary">\n          <strong>Register Your Home</strong>\n        </h4>\n      </div>\n\n    <!-- Login form -->\n    <div class="list-form" [formGroup]="registerForm">\n\n        <ion-item>\n            <ion-label floating>\n              <ion-icon name="code" item-start class="text-primary"></ion-icon>\n              Home Code*\n              </ion-label>\n            <ion-input type="text" formControlName="homeId"></ion-input>\n        </ion-item>\n\n      <ion-item>\n          <ion-label floating>\n            <ion-icon name="home" item-start class="text-primary"></ion-icon>\n            Street Address*\n            </ion-label>\n          <ion-input type="text" formControlName="address"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Username*\n        </ion-label>\n        <ion-input type="text" formControlName="userName"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Email*\n        </ion-label>\n        <ion-input type="email" formControlName="email" class="form-control"></ion-input>\n      </ion-item>\n      <!--<div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.email" >\n            <div class="error-message" *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n          {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>-->\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password (Min 5 Character)\n        </ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n\n    </div>\n\n    <div margin-top>\n      <button ion-button block color="dark" tappable (click)="register()">\n        SIGN UP\n      </button>\n\n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top padding-bottom>\n      <span ion-text color="primary" tappable (click)="login()">You already have an account ?</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\register\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__services_login__["a" /* LoginService */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notifications',template:/*ion-inline-start:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\notifications\notifications.html"*/'<ion-list class="no-margin">\n  <ion-list-header class="no-margin">\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n  	<span ion-text color="primary" class="bold">Notifications</span>\n  </ion-list-header>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	New booking success!\n  </button>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	Activity rescheduled\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n</ion-list>\n'/*ion-inline-end:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\notifications\notifications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').map(function (res) { return res; });
    };
    return WeatherProvider;
}());
WeatherProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], WeatherProvider);

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalWeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weather__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HttpErrorResponse } from '@angular/common/http';
var LocalWeatherPage = (function () {
    function LocalWeatherPage(navCtrl, weatherProvider, storage) {
        this.navCtrl = navCtrl;
        this.weatherProvider = weatherProvider;
        this.storage = storage;
        this.locationList = [
            { city: 'Los Angeles', state: 'CA' },
            { city: 'Miami', state: 'FL' },
            { city: 'New York', state: 'NY' },
            { city: 'Seattle', state: 'WA' }
        ];
    }
    LocalWeatherPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('location').then(function (val) {
            if (val != null) {
                _this.location = JSON.parse(val);
            }
            else {
                _this.location = {
                    state: 'NY',
                    city: 'New York'
                };
            }
            _this.getWeather(_this.location);
        });
    };
    LocalWeatherPage.prototype.getWeather = function (location) {
        var _this = this;
        if (typeof location === 'string') {
            this.location = JSON.parse(location);
            console.log(this.location);
        }
        else {
            this.location = location;
        }
        this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
    };
    return LocalWeatherPage;
}());
LocalWeatherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-local-weather',template:/*ion-inline-start:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\local-weather\local-weather.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Local Weather</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="common-bg">\n  <ion-card class="full-width" no-margin margin-bottom>\n    <ion-card-content no-padding>\n\n      <ion-item>\n        <ion-label class="text-1x bold">Select Local</ion-label>\n        <ion-select [(ngModel)]="location" (ionChange)="getWeather(location)">\n          <ion-option *ngFor="let location of locationList" [value]="location">{{ location.city }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid class="card" padding *ngIf="weather">\n    <ion-row>\n        <ion-col width-50 offset-25>\n            <h2 class="location text-dark">{{weather.display_location.full}}</h2>\n            <div class="icon"><img src="{{weather.icon_url}}" alt="weather"></div>\n            <h3 class="desc">{{weather.weather}}</h3>\n            <h1 class="temp">{{weather.temp_c}}&deg;</h1>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col width-100>\n            <ion-list>\n\n                <ion-item>\n                <strong>Temp:</strong> {{weather.temperature_string}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Relative Humidity:</strong> {{weather.relative_humidity}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Dewpoint:</strong> {{weather.dewpoint_string}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Visibility:</strong> {{weather.visibility_km}}\n                </ion-item>\n                <ion-item>\n                    <strong>Heat Index:</strong> {{weather.heat_index_string}}\n                </ion-item>\n\n            </ion-list>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\local-weather\local-weather.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], LocalWeatherPage);

//# sourceMappingURL=local-weather.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(398);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_visits_visits__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_visit__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_codigo_qr_codigo_qr__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_weather__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_register_register__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_local_weather_local_weather__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_acceso_acceso__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularx_qrcode__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_social_sharing__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_screenshot__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_streamfeed_streamfeed__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_firesensors_firesensors__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng_socket_io__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var config = { url: "https://localhost:8443", options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_local_weather_local_weather__["a" /* LocalWeatherPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_acceso_acceso__["a" /* AddUserPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_codigo_qr_codigo_qr__["a" /* CodigoQrPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_visits_visits__["a" /* VisitsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_streamfeed_streamfeed__["a" /* StreamfeedPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_firesensors_firesensors__["a" /* FiresensorsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_29_ng_socket_io__["SocketIoModule"].forRoot(config),
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false
            }, {
                links: [
                    { loadChildren: '../pages/addUser/addUser.module#AccesoPageModule', name: 'AddUserPage', segment: 'addUser', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/codigo-qr/codigo-qr.module#CodigoQrPageModule', name: 'CodigoQrPage', segment: 'codigo-qr', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/firesensors/firesensors.module#FiresensorsPageModule', name: 'FiresensorsPage', segment: 'firesensors', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/visits/visits.module#VisitsPageModule', name: 'VisitsPage', segment: 'visits', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/streamfeed/streamfeed.module#StreamfeedPageModule', name: 'StreamfeedPage', segment: 'streamfeed', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '_mdc_HomeSecurity',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            }),
            __WEBPACK_IMPORTED_MODULE_24_angularx_qrcode__["a" /* QRCodeModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_local_weather_local_weather__["a" /* LocalWeatherPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_acceso_acceso__["a" /* AddUserPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_codigo_qr_codigo_qr__["a" /* CodigoQrPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_visits_visits__["a" /* VisitsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_streamfeed_streamfeed__["a" /* StreamfeedPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_firesensors_firesensors__["a" /* FiresensorsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_14__services_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_login__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__services_visit__["a" /* VisitService */],
            __WEBPACK_IMPORTED_MODULE_1__services_global__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_screenshot__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_social_sharing__["a" /* SocialSharing */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalService = (function () {
    function GlobalService() {
    }
    return GlobalService;
}());
GlobalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], GlobalService);

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__acceso_acceso__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__streamfeed_streamfeed__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firesensors_firesensors__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_login__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(_service, socket, nav, popoverCtrl, _global) {
        var _this = this;
        this._service = _service;
        this.socket = socket;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this._global = _global;
        this.Home = {
            WindowsSensors: ""
        };
        this.Mono = 0;
        this.Duo = 0;
        this.Temp = 0;
        this.username = this._global.UserName;
        this.location = this._global.UserLocation;
        this.isToggled = false;
        this.socket.connect();
        this.socket.on("home_1", function (msg) {
            _this.Home.WindowsSensors = JSON.parse(msg.payload).WindowsSensors;
            _this.Mono = JSON.parse(msg.payload).CarbonMonoxide;
            _this.Duo = JSON.parse(msg.payload).CarbonDioxide;
            _this.Temp = JSON.parse(msg.payload).Temp;
            console.log(msg);
        });
    }
    // to go account page
    HomePage.prototype.goToAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage.prototype.goToStreamFeed = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__streamfeed_streamfeed__["a" /* StreamfeedPage */]);
    };
    HomePage.prototype.goToFireSensor = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__firesensors_firesensors__["a" /* FiresensorsPage */], { mono: this.Mono, duo: this.Duo, temp: this.Temp });
    };
    // go to register page
    HomePage.prototype.addUser = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__acceso_acceso__["a" /* AddUserPage */]);
    };
    HomePage.prototype.notify = function () {
        this._service.PostDoor({ WindowsSensors: Number(this.isToggled).toString() }, JSON.parse(localStorage.getItem("userData")).accessToken).subscribe(function (d) {
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
<<<<<<< HEAD
        selector: 'page-home',template:/*ion-inline-start:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\home\home.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <p>Smart Home Security</p>\n    </ion-title>\n<!--     <ion-buttons end>\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <button ion-button full tappable (click)="addUser()">\n    <ion-icon name="key"></ion-icon>\n    <div style="padding-left: 100px">Conceder Acceso</div>\n  </button>\n\n\n\n  \n    <div cards>\n\n        <div class="grid-full">\n          <ion-row>\n            <ion-col>\n             \n                \n                <img  class="image" (click)="goToStreamFeed()" src="../../assets/img/cameras.png"/>\n              \n                \n      <div  class="image" >Surveillance Cameras</div>\n              \n            </ion-col>\n    \n            <ion-col>\n                <img  class="image" (click)="goToFireSensor()" src="../../assets/img/fire.png"/>\n                <div  class="image" >Fire Sensors Stats</div>\n                 </ion-col> \n    \n            <ion-col>\n                <img  class="image" (click)="goToStreamFeed()" src="../../assets/img/doors.png"/>\n                <div  class="image" >Doors Sensors Stats</div>\n            </ion-col>\n    \n            <ion-col>\n                <img  class="image" (click)="goToStreamFeed()" src="../../assets/img/windows.png"/>\n                <div  class="image" >Winsows Sensors Stats</div>\n            </ion-col>\n          </ion-row>\n        </div>\n    \n      </div>\n      <ion-list>\n\n        <ion-item>\n          <ion-label>Doors Sensor Status</ion-label>\n          <ion-toggle [(ngModel)]="isToggled" (ionChange)="notify()"></ion-toggle>\n        </ion-item>\n      \n      </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\home\home.html"*/
=======
        selector: "page-home",template:/*ion-inline-start:"D:\projet aim\smarthomefullstack\src\pages\home\home.html"*/'<!-- -->\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n\n    <ion-title> <p>Smart Home Security</p> </ion-title>\n\n    <!--     <ion-buttons end>\n\n      <button ion-button tappable (click)="goToAccount()">\n\n        <ion-icon name="cog"></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <!--   <button ion-button full tappable (click)="addUser()">\n\n    <ion-icon name="key"></ion-icon>\n\n    <div style="padding-left: 100px">Conceder Acceso</div>\n\n  </button> -->\n\n\n\n  <div cards>\n\n    <div class="grid-full">\n\n      <ion-row>\n\n        <ion-col>\n\n          <img\n\n            class="image"\n\n            (click)="goToStreamFeed()"\n\n            src="assets/img/cameras.png"\n\n          />\n\n\n\n          <div class="image">Surveillance Cameras</div>\n\n        </ion-col>\n\n\n\n        <ion-col>\n\n          <img\n\n            class="image"\n\n            (click)="goToFireSensor()"\n\n            src="assets/img/fire.png"\n\n          />\n\n          <div class="image">Fire Sensors Stats</div>\n\n        </ion-col>\n\n\n\n        <ion-col>\n\n          <img\n\n            class="image"\n\n            (click)="goToStreamFeed()"\n\n            src="assets/img/doors.png"\n\n          />\n\n          <div class="image">Doors Sensors Stats</div>\n\n        </ion-col>\n\n\n\n        <ion-col>\n\n          <img\n\n            class="image"\n\n            (click)="goToStreamFeed()"\n\n            src="assets/img/windows.png"\n\n          />\n\n          <div class="image">Winsows Sensors Stats</div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Doors Sensor Status</ion-label>\n\n      <ion-toggle [(ngModel)]="isToggled" (ionChange)="notify()"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projet aim\smarthomefullstack\src\pages\home\home.html"*/
>>>>>>> 20e15ba0ca80d77103d3c9449727d60e2b2375da
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__services_login__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_0__services_global__["a" /* GlobalService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_visits_visits__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_local_weather_local_weather__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */], icon: "home" },
            {
                title: "Local Weather",
                component: __WEBPACK_IMPORTED_MODULE_8__pages_local_weather_local_weather__["a" /* LocalWeatherPage */],
                icon: "partly-sunny"
            }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            //this.keyboard.disableScroll(true);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        localStorage.removeItem("userData");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.cambiarContrasena = function () { };
    MyApp.prototype.menuPrincipal = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.registroVisitas = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_visits_visits__["a" /* VisitsPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"D:\Lertek_HomeSecurity_MobileApp-master\src\app\app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n  <ion-header>\n    <ion-toolbar class="user-profile">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n              <div class="user-avatar">\n                <img src="assets/img/logo-inicio.png" alt="logo-inicio">\n              </div>\n          </ion-col>\n          <ion-col padding-top col-8>\n            <h2 ion-text class="no-margin bold text-white">\n              Smart Home Security\n            </h2>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="common-bg-2">\n\n    <ion-grid>\n        <ion-row no-padding class="other-data">\n            <ion-col no-padding class="column">\n              <button ion-button icon-left small full color="light" menuClose (click)="menuPrincipal()">\n                <ion-icon name="home"></ion-icon>\n                Menu Principal\n              </button>\n            </ion-col>\n        </ion-row>\n\n        <ion-row no-padding class="other-data">\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose (click)="registroVisitas()">\n              <ion-icon name="archive"></ion-icon>\n                Registro de Visitas\n            </button>\n          </ion-col>\n      </ion-row>\n\n        <ion-row no-padding class="other-data">\n            <ion-col no-padding class="column">\n              <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n                <ion-icon name="log-out"></ion-icon>\n                Cerrar Sesión\n              </button>\n            </ion-col>\n          </ion-row>\n    </ion-grid>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\Lertek_HomeSecurity_MobileApp-master\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navParams, nav, forgotCtrl, menu, toastCtrl, loading, _service, _global) {
        this.navParams = navParams;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this._service = _service;
        this._global = _global;
        this.pageTitle = "Login";
        this.user = {};
        this._global.UserEmail = null;
        this._global.UserName = null;
        this._global.UserLocation = null;
        this.menu.swipeEnable(false);
        console.log(navParams.get("willingly"));
        if (localStorage.getItem("userData")) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        else if (((!localStorage.getItem("UserId")) && (navParams.get("willingly") === "false"))) {
            navParams.data;
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
        }
    }
    LoginPage.prototype.loadingCreate = function () {
        this.loader = this.loading.create({
            content: "Loading..."
            //duration : 1500
        });
        return this.loader.present();
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        this.loadingCreate().then(function () {
            _this.validateUser();
        });
    };
    LoginPage.prototype.validateUser = function () {
        var _this = this;
        this._service.ValidateUser(this.user).subscribe(function (d) {
            console.log("this is d");
            console.log(d);
            _this.r = _this.confirmResponse(d);
            if (_this.r) {
                console.log("r value: " + _this.r);
                _this._global.UserEmail = d[1];
                _this._global.UserName = d[2];
                _this._global.UserLocation = d[3];
                _this.loader.dismiss();
                localStorage.setItem("userData", JSON.stringify(d));
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            }
            else {
                _this.loader.dismiss();
                _this.useToast("Your Credentials are incorrect ,Please verify it !", 5000);
            }
        });
    };
    LoginPage.prototype.confirmResponse = function (data) {
        if (data.accessToken) {
            return true;
        }
        else {
            return false;
        }
    };
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: "Olvido su contraseña?",
            message: "Ingrese su email para recordarle sus credenciales de addUser.",
            inputs: [
                {
                    name: "email",
                    placeholder: "Email",
                    type: "email"
                }
            ],
            buttons: [
                {
                    text: "Cancelar",
                    handler: function (data) {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Enviar",
                    handler: function (data) {
                        console.log("Send clicked");
                        _this.mandarCorreo(data);
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage.prototype.mandarCorreo = function (data) {
        var _this = this;
        this._service.RecoverPassword(data).subscribe(function (d) {
            if (d != undefined) {
                _this.useToast("Se ha enviado un correo a la dirección indicada con sus credenciales. Favor de verificar.", 3000);
            }
        });
    };
    LoginPage.prototype.useToast = function (msg, time) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time,
            position: "top",
            cssClass: "dark-trans",
            closeButtonText: "OK",
            showCloseButton: true
        });
        toast.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: "page-login",template:/*ion-inline-start:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\login\login.html"*/'<!-- -->\n\n\n\n<ion-content padding class="animated fadeIn login auth-page">\n\n  <div class="login-content">\n\n    <!-- Logo -->\n\n    <div text-center class="animated fadeInDown">\n\n      <div class="logo"></div>\n\n      <h2 ion-text class="text-primary"><strong>Welcome!</strong></h2>\n\n    </div>\n\n\n\n    <!-- Login form -->\n\n    <form #userLoginForm="ngForm" class="list-form">\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n\n          Email\n\n        </ion-label>\n\n        <ion-input\n\n          type="email"\n\n          #Email="ngModel"\n\n          [(ngModel)]="user.email"\n\n          [ngModelOptions]="{ standalone: true }"\n\n          required\n\n        ></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n\n          Password\n\n        </ion-label>\n\n        <ion-input\n\n          type="password"\n\n          #Password="ngModel"\n\n          [(ngModel)]="user.password"\n\n          [ngModelOptions]="{ standalone: true }"\n\n          required\n\n        ></ion-input>\n\n      </ion-item>\n\n    </form>\n\n\n\n    <p text-right ion-text color="primary" tappable (click)="forgotPass()">\n\n      <strong>Forget password ?</strong>\n\n    </p>\n\n\n\n    <div>\n\n      <button\n\n        ion-button\n\n        icon-start\n\n        block\n\n        color="dark"\n\n        tappable\n\n        (click)="onSubmit()"\n\n      >\n\n        <ion-icon name="log-in"></ion-icon>\n\n        LOG IN\n\n      </button>\n\n    </div>\n\n\n\n    <!-- Other links -->\n\n    <div text-center margin-top>\n\n      <span ion-text color="primary" tappable (click)="register()"\n\n        >Not a user? <strong>Register here!</strong></span\n\n      >\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__services_login__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_0__services_global__["a" /* GlobalService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error__ = __webpack_require__(275);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function (_super) {
    __extends(LoginService, _super);
    function LoginService(_http) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        _this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*', 'Access-Control-Allow-Headers': '*' });
        _this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: _this.headers });
        return _this;
    }
    LoginService.prototype.ValidateUser = function (IUser) {
        console.log(IUser);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_1__environment__["a" /* environment */].endpoint + '/auth', IUser).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (response) { return response.json(); }), Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["catchError"])(this.handleError)).do(function (response) { return console.log(response); });
    };
    LoginService.prototype.RegisterUser = function (IUser) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_1__environment__["a" /* environment */].endpoint + '/users', IUser).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (response) { return response.json(); }), Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["catchError"])(this.handleError)).do(function (response) { return console.log(response); });
    };
    LoginService.prototype.PostDoor = function (IUser, token) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'authorization': "Bearer " + token.toString() });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        console.log(this.headers);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_1__environment__["a" /* environment */].endpoint + '/values', IUser, this.options).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (response) { return response; }), Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["catchError"])(this.handleError)).do(function (response) { return console.log(response); });
    };
    LoginService.prototype.RecoverPassword = function (email) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_1__environment__["a" /* environment */].endpoint + '/users/recoverpassword/' + email, this.options).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (response) { return response; }), Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["catchError"])(this.handleError)).do(function (response) { return console.log(response); });
    };
    return LoginService;
}(__WEBPACK_IMPORTED_MODULE_4__error__["a" /* ErrorService */]));
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], LoginService);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodigoQrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_social_sharing__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_screenshot__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CodigoQrPage = (function () {
    function CodigoQrPage(navCtrl, navParams, _global, screenshot, socialsharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._global = _global;
        this.screenshot = screenshot;
        this.socialsharing = socialsharing;
        this.QR = this._global.tempQRGuid;
        this.visitorName = this._global.tempVisitorName;
        this.visitorDate = this._global.tempVisitorDate;
        this.visitorInitialDate = this._global.tempVisitorInitialDate;
        this.visitorFinalDate = this._global.tempVisitorFinalDate;
        this.visitaUnica = this._global.tempVisitorDate != '' ? true : false;
        this.tempQRCode = this._global.tempQRGuid;
    }
    CodigoQrPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CodigoQrPage');
    };
    CodigoQrPage.prototype.regresar = function () {
        this._global.tempQRGuid = null;
        this._global.tempVisitorName = null;
        this._global.tempVisitorDate = null;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    /*
      compartirWa(){
          this.screenshot.URI(80)
            .then((res) => {
              this.socialsharing.shareViaWhatsApp(null, res.URI, null)
               .then(() => {},
                 () => {
                   alert('SocialSharing failed');
                 });
               },
              () => {
              alert('Screenshot failed');
              });
      }
    
      compartirFb(){
        this.screenshot.URI(80)
          .then((res) => {
            this.socialsharing.shareViaFacebook(null, res.URI, null)
             .then(() => {},
               () => {
                 alert('SocialSharing failed');
               });
             },
            () => {
            alert('Screenshot failed');
            });
    } */
    CodigoQrPage.prototype.compartirGen = function () {
        var _this = this;
        this.screenshot.URI(80).then(function (res) {
            _this.socialsharing.share("Share message", "Share subject", res.URI, "A URL to share").then(function () {
                console.log("shareSheetShare: Success");
            }).catch(function () {
                console.error("shareSheetShare: failed");
            });
        }).catch(function () {
            console.error("screenshot: failed");
        });
    };
    return CodigoQrPage;
}());
CodigoQrPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'page-codigo-qr',template:/*ion-inline-start:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\codigo-qr\codigo-qr.html"*/'\n<ion-content class="auth-page">\n    <div class="qr-content">\n  \n      <!-- Logo -->\n      <div text-center class="animated fadeInDown">\n          <div class="logo-chico"></div>\n          <h4 ion-text class="text-primary">\n            <strong>Registro de Visitantes</strong>\n          </h4>\n        </div>\n  \n      <!-- Login form -->\n      <div class="list-form">\n\n          <div class="text-center" style="margin-left: 10px;">\n              <qrcode [qrdata]="QR" [size]="256" [level]="\'M\'"></qrcode>\n          </div>\n\n          <ion-item>              \n              <ion-label><strong> Visitante: {{visitorName}} </strong></ion-label>\n          </ion-item>\n          \n          <ion-item *ngIf="visitaUnica">\n            <ion-label><strong>Fecha Visita: {{visitorDate}}</strong></ion-label>\n          </ion-item>\n\n          <ion-item *ngIf="!visitaUnica">\n              <ion-label><strong>Desde: {{visitorInitialDate}}</strong></ion-label>\n            </ion-item>\n\n            <ion-item *ngIf="!visitaUnica">\n                <ion-label><strong>Hasta: {{visitorFinalDate}}</strong></ion-label>\n              </ion-item>\n  \n      </div>\n  \n      <div margin-top>\n\n        <button ion-button block color="dark" (click)="compartirGen()"> <ion-icon name="share-alt"></ion-icon>  &nbsp;&nbsp;&nbsp;Compartir </button>\n\n        <button ion-button block color="dark" tappable (click)="regresar()">\n            Regresar\n          </button>  \n      </div>\n  \n    </div>\n  </ion-content>\n  '/*ion-inline-end:"D:\Lertek_HomeSecurity_MobileApp-master\src\pages\codigo-qr\codigo-qr.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_screenshot__["a" /* Screenshot */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_social_sharing__["a" /* SocialSharing */]])
], CodigoQrPage);

//# sourceMappingURL=codigo-qr.js.map

/***/ })

},[393]);
//# sourceMappingURL=main.js.map