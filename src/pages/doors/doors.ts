import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { Socket } from "ng-socket-io";
import { ThrowStmt } from "@angular/compiler";
import { LoginService } from "../../services/login";
import { numberFormat } from "highcharts";
import { ModifyService } from "../../services/modify";

/**
 * Generated class for the DoorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-doors",
  templateUrl: "doors.html"
})
export class DoorsPage {
  refresh: boolean = true;
  modify: boolean = false;
  DoorsSensors = [];
  isToggled: boolean;
  constructor(
    public navCtrl: NavController,
    public socket: Socket,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public _service: LoginService,
    public _service2: ModifyService
  ) {
    if (
      JSON.parse(
        localStorage.getItem("userData")
      ).permissionLevel.toString() === "1"
    ) {
      this.modify = true;
    }
    this.isToggled = true;
    this.DoorsSensors = navParams.get("DoorsSensors");
    this.socket.connect();
    var that = this;

    this.socket.on(
      JSON.parse(localStorage.getItem("userData")).homeId.toString(),
      msg => {
        if (this.refresh) {
          var DoorSensors = [];
          var position = 0;
        }
        for (var i in JSON.parse(msg.payload)) {
          if (i.endsWith("Door")) {
            if (this.refresh) {
              DoorSensors.push([
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
          this.DoorsSensors = DoorSensors;
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
  changeDoor(door, value, position) {
    this.DoorsSensors[position] = [door, !value, value == 1, position];

    this.refresh = false;

    let a: string =
      JSON.parse(localStorage.getItem("userData")).homeId.toString() +
      "_" +
      door.toString();

    this._service2
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
