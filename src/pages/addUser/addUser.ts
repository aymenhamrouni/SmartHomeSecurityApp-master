import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController
} from "ionic-angular";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { HomePage } from "../home/home";
import { LoginService } from "../../services/login";

@IonicPage()
@Component({
  selector: "page-addUser",
  templateUrl: "addUser.html"
})
export class AddUserPage {
  homeId : string ;
  pageTitle = "AddUser";
  errorMsj: string;
  loader: any;
  visit: any = {};
  r: boolean;
  user: any = {};
  addUserForm: any = {};
  permissionLevel: number;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loading: LoadingController,
    private _service: LoginService
  ) {
    this.homeId=JSON.parse(localStorage.getItem("userData")).homeId.toString();;
    this.addUserForm = new FormGroup({
      type: new FormControl("", Validators.required),
      userName: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(5)
        ])
      )
    });
  }

  ionViewDidLoad() {}

  // to go account page
  /*   goToAccount() {
    this.nav.push(SettingsPage);
  } */

  configureUserType(type) {
    if (type == 1) this.permissionLevel = 32768;
    if (type == 2) this.permissionLevel = 1;
  }
  loadingCreate() {
    this.loader = this.loading.create({
      content: "Loading..."
      //duration : 1500
    });
    return this.loader.present();
  }
  CreateUser() {
    if (this.ValidateUser() === "allclear") {
      this.loadingCreate().then(() => {
        this._service.AddUser(this.user).subscribe(d => {
          this.confirmResponse(d);
          this.loader.dismiss();
        });
      });
    } else {
      this.useToast(this.ValidateUser(), 5000);
    }
  }

  ValidateUser() {
    if (this.addUserForm.controls.type.invalid) {
      return "Please specify user type!";
    } else if (this.addUserForm.controls.userName.invalid) {
      return "Username is Invalid!";
    } else if (this.addUserForm.controls.email.invalid) {
      return "Email is Invalid!";
    } else if (this.addUserForm.controls.password.invalid) {
      return "Password is Invalid!";
    } else {
      this.user = {
        userName: this.addUserForm.controls.userName.value,
        email: this.addUserForm.controls.email.value,
        password: this.addUserForm.controls.password.value,
        address: JSON.parse(localStorage.getItem("userData")).address,
        homeId: JSON.parse(localStorage.getItem("userData")).homeId,
        permissionLevel: this.permissionLevel
      };

      return "allclear";
    }
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

  confirmResponse(data) {
    this.useToast(data.success.toString(), 10000);
  }
}
