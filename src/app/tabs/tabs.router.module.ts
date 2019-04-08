import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        children:[
          {
          path: '',
          loadChildren: '../news/news.module#NewsPageModule'
          }
        ]
      },

      {
        path: 'news2',
        children: [
          {
            path: '',
            loadChildren: '../news2/news2.module#News2PageModule'
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/tabs/news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
