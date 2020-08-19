import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostEventPage } from './postEvent.page';
import { PostEventPageRoutingModule } from './postEvent-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostEventPageRoutingModule
  ],
  declarations: [PostEventPage]
})
export class PostEventPageModule {}
