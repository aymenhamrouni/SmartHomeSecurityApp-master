import { ModifyService } from "./../services/modify";
import { LoginService } from "./../services/login";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { IonicApp, IonicModule } from "ionic-angular";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Keyboard } from "@ionic-native/keyboard";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { AddUserPage } from "../pages/addUser/addUser";
import { HttpModule } from "@angular/http";
import { QRCodeModule } from "angularx-qrcode";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Screenshot } from "@ionic-native/screenshot";
import { StreamfeedPage } from "../pages/streamfeed/streamfeed";
import { FiresensorsPage } from "../pages/firesensors/firesensors";
import { SocketIoModule, SocketIoConfig } from "ng-socket-io";
import { DoorsPage } from "../pages/doors/doors";
import { WindowsPage } from "../pages/windows/windows";
const config: SocketIoConfig = { url: "https://localhost:8443", options: {} };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AddUserPage,
    StreamfeedPage,
    FiresensorsPage,
    DoorsPage,
    WindowsPage
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: "_mdc_HomeSecurity",
      driverOrder: ["indexeddb", "sqlite", "websql"]
    }),
    QRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AddUserPage,
    StreamfeedPage,
    FiresensorsPage,
    DoorsPage,
    WindowsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    LoginService,
    Screenshot,
    SocialSharing,
    ModifyService
  ]
})
export class AppModule {}
