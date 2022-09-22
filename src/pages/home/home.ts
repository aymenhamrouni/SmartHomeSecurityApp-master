import { AddUserPage } from "./../addUser/addUser";
import { Component } from "@angular/core";
import {
  NavController,
  PopoverController,
  Nav,
  ToastController
} from "ionic-angular";

import { StreamfeedPage } from "./../streamfeed/streamfeed";
import { FiresensorsPage } from "../firesensors/firesensors";
import { Socket } from "ng-socket-io";
import { LoginService } from "./../../services/login";
import { DoorsPage } from "../doors/doors";
import { WindowsPage } from "../windows/windows";
import { ModifyService } from "../../services/modify";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public isToggled: boolean;
  WindowsSensors = [];
  DoorsSensors = [];
  refresh: boolean = true;
  Home = {
    Alarm: ""
  };
  Mono: number = 0;
  Duo: number = 0;
  Temp: number = 0;
  Power: String;
  alarm: boolean = false;
  constructor(
    private _service2: ModifyService,
    private _service: LoginService,
    private socket: Socket,
    public nav: NavController,
    public popoverCtrl: PopoverController,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    this.isToggled = false;
    this.socket.connect();
    this.Power = JSON.parse(
      localStorage.getItem("userData")
    ).permissionLevel.toString();
    if (this.Power === "1") {
      this.alarm = true;
    }
    var that = this;
    this.socket.on(
      JSON.parse(localStorage.getItem("userData")).homeId.toString(),
      msg => {
        that.WindowsSensors = [];
        that.DoorsSensors = [];
        var position = 0;
        var position2 = 0;
        for (var i in JSON.parse(msg.payload)) {
          if (i.endsWith("Window")) {
            that.WindowsSensors.push([
              i,
              JSON.parse(msg.payload)[i],
              JSON.parse(msg.payload)[i] == 0,
              position
            ]);
            position++;
          } else if (i.endsWith("Door")) {
            that.DoorsSensors.push([
              i,
              JSON.parse(msg.payload)[i],
              JSON.parse(msg.payload)[i] == 0,
              position2
            ]);
            position2++;
          }
        }

        this.Home.Alarm = JSON.parse(msg.payload).Alarm;
        if (this.refresh) {
          if (this.Home.Alarm.toString() === "0") {
            this.isToggled = false;
          } else {
            this.isToggled = true;
          }
        }
        this.Mono = JSON.parse(msg.payload).CarbonMonoxide;
        this.Duo = JSON.parse(msg.payload).CarbonDioxide;
        this.Temp = JSON.parse(msg.payload).Temp;
      }
    );
    var that = this;
    setInterval(function() {
      if (localStorage.getItem("userData")) {
        that._service.RefreshToken().subscribe(d => {});
      }
    }, 900000);
  }

  // to go account page

  goToStreamFeed() {
    this.nav.push(StreamfeedPage);
  }
  goToFireSensor() {
    this.nav.push(FiresensorsPage, {
      mono: this.Mono,
      duo: this.Duo,
      temp: this.Temp
    });
  }

  // go to register page
  addUser() {
    this.nav.push(AddUserPage);
  }

  public notify() {
    this.refresh = false;

    let a: string =
      JSON.parse(localStorage.getItem("userData")).homeId.toString() + "_alarm";

    this._service2
      .PostValue(
        { NewValue: Number(this.isToggled).toString(), change: a },
        JSON.parse(localStorage.getItem("userData")).accessToken
      )
      .subscribe(d => {});
    var that = this;
    setTimeout(function() {
      that.refresh = true;
    }, 2000);
  }
  goToDoors() {
    //this.nav.push(DoorsPage, { DoorsSensors: this.DoorsSensors });
    this.nav.push(DoorsPage, { DoorsSensors: this.DoorsSensors });
  }
  goToWindows() {
    this.nav.push(WindowsPage, { WindowsSensors: this.WindowsSensors });
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
