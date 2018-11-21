import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KatyPage } from './katy';

@NgModule({
  declarations: [
    KatyPage,
  ],
  imports: [
    IonicPageModule.forChild(KatyPage),
  ],
})
export class KatyPageModule {}
