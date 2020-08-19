import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyProfilePage } from './myProfile.page';

import { MyProfilePageRoutingModule } from './myProfile-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MyProfilePage }]),
    MyProfilePageRoutingModule,
  ],
  declarations: [MyProfilePage]
})
export class MyProfilePageModule {}
