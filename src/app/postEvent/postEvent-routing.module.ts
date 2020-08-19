import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEventPage } from './postEvent.page';

const routes: Routes = [
  {
    path: '',
    component: PostEventPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostEventPageRoutingModule {}
