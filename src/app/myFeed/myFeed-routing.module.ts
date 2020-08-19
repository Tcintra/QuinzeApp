import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFeedPage } from './myFeed.page';

const routes: Routes = [
  {
    path: '',
    component: MyFeedPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFeedPageRoutingModule {}
