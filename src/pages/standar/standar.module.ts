import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StandarPage } from './standar';

@NgModule({
  declarations: [
    StandarPage,
  ],
  imports: [
    IonicPageModule.forChild(StandarPage),
  ],
})
export class StandarPageModule {}
