import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { NavbarComponent } from '../../MOVIESDB.Core/components/navbar/navbar.component';
import { MoviesRoutingModule } from './movies.routing';
import { RouterModule } from '@angular/router';
import { MoviesFilterComponent } from './movies-list/movies-filter/movies-filter.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesCardsComponent } from './movies-list/movies-cards/movies-cards.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    MoviesFilterComponent,
    MoviesCardsComponent
  ]
})
export class MoviesModule {}
