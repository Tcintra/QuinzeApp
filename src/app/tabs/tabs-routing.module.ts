import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'myFeed',
        loadChildren: () => import('../myFeed/myFeed.module').then(m => m.MyFeedPageModule)
      },
      {
        path: 'explore',
        loadChildren: () => import('../explore/explore.module').then(m => m.ExplorePageModule)
      },
      {
        path: 'postEvent',
        loadChildren: () => import('../postEvent/postEvent.module').then(m => m.PostEventPageModule)
      },
      {
        path: 'myEvents',
        loadChildren: () => import('../myEvents/myEvents.module').then(m => m.MyEventsPageModule)
      },
      {
        path: 'myProfile',
        loadChildren: () => import('../myProfile/myProfile.module').then(m => m.MyProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/myFeed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/myFeed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
