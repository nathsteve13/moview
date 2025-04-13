import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagementMoviePageRoutingModule } from './management-movie-routing.module';

import { ManagementMoviePage } from './management-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagementMoviePageRoutingModule
  ],
  declarations: [ManagementMoviePage]
})
export class ManagementMoviePageModule {}
