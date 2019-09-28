import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicsListComponent } from './topics-list/topics-list.component';

const routes: Routes = [
  { path: '', component: TopicsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
