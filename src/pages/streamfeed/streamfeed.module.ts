import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreamfeedPage } from './streamfeed';

@NgModule({
  declarations: [
    StreamfeedPage,
  ],
  imports: [
    IonicPageModule.forChild(StreamfeedPage),
  ],
})
export class StreamfeedPageModule {}
