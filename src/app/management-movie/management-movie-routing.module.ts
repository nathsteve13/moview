import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementMoviePage } from './management-movie.page';

const routes: Routes = [
  {
    path: '',
    component: ManagementMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementMoviePageRoutingModule {}
