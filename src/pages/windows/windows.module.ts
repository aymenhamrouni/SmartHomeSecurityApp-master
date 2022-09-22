import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WindowsPage } from './windows';

@NgModule({
  declarations: [
    WindowsPage,
  ],
  imports: [
    IonicPageModule.forChild(WindowsPage),
  ],
})
export class WindowsPageModule {}
