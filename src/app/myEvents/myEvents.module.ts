import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyEventsPage } from './myEvents.page';

import { MyEventsPageRoutingModule } from './myEvents-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MyEventsPageRoutingModule
  ],
  declarations: [MyEventsPage]
})
export class MyEventsPageModule {}
