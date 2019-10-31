import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicsListComponent } from './topics-list/topics-list.component';
import { AlgorithmsListComponent } from './algorithms-list/algorithms-list.component';
import { AlgorithmsDetailsComponent } from './algorithms-details/algorithms-details.component';

const routes: Routes = [
  { path: 'algorithms/details/:algorithmId', component: AlgorithmsDetailsComponent},
  { path: 'algorithms', component: AlgorithmsListComponent },
  { path: '', component: TopicsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
