import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyFeedPage } from './myFeed.page';
import { MyFeedPageRoutingModule } from './myFeed-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Service
import { MyFeedService } from './myFeed.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MyFeedPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MyFeedPage],
  providers: [
    MyFeedService
  ],
  exports: [
    MyFeedPage
  ]
})
export class MyFeedPageModule {}
