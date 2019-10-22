import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicsListComponent } from './topics-list/topics-list.component';
import { AlgorithmsListComponent } from './algorithms-list/algorithms-list.component';

const routes: Routes = [
  { path: '', component: TopicsListComponent },
  { path: 'algorithms', component: AlgorithmsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
