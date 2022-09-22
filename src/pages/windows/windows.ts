import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { Socket } from "ng-socket-io";
import { LoginService } from "../../services/login";
import { ModifyService } from "../../services/modify";

/**
 * Generated class for the WindowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-windows",
  templateUrl: "windows.html"
})
export class WindowsPage {
  refresh: boolean = true;
  modify: boolean = false;
  WindowsSensors = [];
  isToggled: boolean;
  constructor(
    public navCtrl: NavController,
    public socket: Socket,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public _service: ModifyService
  ) {
    if (
      JSON.parse(
        localStorage.getItem("userData")
      ).permissionLevel.toString() === "1"
    ) {
      this.modify = true;
    }
    this.isToggled = true;
    this.socket.connect();
    var that = this;
    this.WindowsSensors = navParams.get("WindowsSensors");
    this.socket.on(
      JSON.parse(localStorage.getItem("userData")).homeId.toString(),
      msg => {
        if (this.refresh) {
          var WindowSensors = [];
          var position = 0;
        }
        for (var i in JSON.parse(msg.payload)) {
          if (i.endsWith("Window")) {
            if (this.refresh) {
              WindowSensors.push([
                i,
                JSON.parse(msg.payload)[i],
                JSON.parse(msg.payload)[i] == 0,
                position
              ]);
            }
            position++;
          }
        }
        if (this.refresh) {
          this.WindowsSensors = WindowSensors;
        }
      }
    );

    let loading = this.loadingCtrl.create({
      spinner: "ios",
      content: "Please wait..."
    });
    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  ionViewDidLoad() {}
  changeWindow(window, value, position) {
    this.WindowsSensors[position] = [window, !value, value == 1, position];

    this.refresh = false;
    let a: string =
      JSON.parse(localStorage.getItem("userData")).homeId.toString() +
      "_" +
      window.toString();
    this._service
      .PostValue(
        { NewValue: Number(!value).toString(), change: a },
        JSON.parse(localStorage.getItem("userData")).accessToken
      )
      .subscribe(d => {});
    var that = this;
    setTimeout(function() {
      that.refresh = true;
    }, 2000);
  }
}
