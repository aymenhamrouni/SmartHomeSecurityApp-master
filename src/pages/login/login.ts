import { LoginService } from "./../../services/login";
import { Component } from "@angular/core";
import {
  NavParams,
  NavController,
  AlertController,
  ToastController,
  MenuController,
  LoadingController
} from "ionic-angular";

import { RegisterPage } from "../register/register";
import { HomePage } from "./../home/home";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  loader: any;
  pageTitle = "Login";
  errorMsj: string;
  user: any = {};
  r: boolean;
  validToken: String;
  constructor(
    public navParams: NavParams,
    public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    public loading: LoadingController,
    public _service: LoginService
  ) {
    this.menu.swipeEnable(false);
    var that = this;
    if (localStorage.getItem("userData")) {
      this._service.CheckUser().subscribe(result => {
        that.validToken = result.ValidJWT;
        if (localStorage.getItem("userData") && that.validToken === "True") {
          that.nav.setRoot(HomePage);
        } else if (
          !localStorage.getItem("UserId") &&
          !navParams.get("willingly")
        ) {
          that.nav.setRoot(RegisterPage);
        }
      });
    } else {
      if (localStorage.getItem("userData") && that.validToken === "True") {
        that.nav.setRoot(HomePage);
      } else if (
        !localStorage.getItem("UserId") &&
        !navParams.get("willingly")
      ) {
        that.nav.setRoot(RegisterPage);
      }
    }
  }
  ionViewDidLoad() {}

  loadingCreate() {
    this.loader = this.loading.create({
      content: "Loading..."
      //duration : 1500
    });
    return this.loader.present();
  }
  onSubmit() {
    this.loadingCreate().then(() => {
      this.validateUser();
    });
  }

  validateUser() {
    this._service.ValidateUser(this.user).subscribe(d => {
      this.r = this.confirmResponse(d);
      if (this.r) {
        this.loader.dismiss();
        localStorage.setItem("userData", JSON.stringify(d));
        localStorage.setItem("UserId", "true");
        this.nav.setRoot(HomePage);
      } else {
        this.loader.dismiss();
        this.useToast(
          "Your Credentials are incorrect, Please verify it !",
          5000
        );
      }
    });
  }

  confirmResponse(data) {
    if (data.accessToken) {
      return true;
    } else {
      return false;
    }
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    this.nav.setRoot(HomePage);
  }

  useToast(msg, time) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: time,
      position: "top",
      cssClass: "dark-trans",
      closeButtonText: "OK",
      showCloseButton: true
    });
    toast.present();
  }
}
