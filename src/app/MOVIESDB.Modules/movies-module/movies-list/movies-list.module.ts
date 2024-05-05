import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../MOVIESDB.Shared/components/card/card.component';
import { MoviesListComponent } from './movies-list.component';
import { MoviesFilterComponent } from './movies-filter/movies-filter.component';
import { MoviesCardsListComponent } from './movies-cards-list/movies-cards-list.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterPipe } from '../../../MOVIESDB.Core/pipes/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesSeeComponent } from './movies-see/movies-see.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CardComponent,
    InfiniteScrollModule ,
    FilterPipe
  ],
  declarations: [
    MoviesListComponent,
    MoviesFilterComponent,
    MoviesCardsListComponent,
    MoviesSeeComponent
  ]
})
export class MoviesListModule { }
