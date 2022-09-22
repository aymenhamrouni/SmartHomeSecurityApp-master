import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { DoorsPage } from "./doors";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DoorsPage],
  imports: [IonicPageModule.forChild(DoorsPage), CommonModule, BrowserModule]
})
export class DoorsPageModule {}
