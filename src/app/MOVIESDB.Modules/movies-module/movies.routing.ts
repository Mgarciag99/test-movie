import { Routes, RouterModule } from '@angular/router';
import { MoviesModuleComponent } from './movies-module.component';
import { NgModule } from '@angular/core';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesSeeComponent } from './movies-list/movies-see/movies-see.component';

const routes: Routes = [
  { 
    path: '' ,
    component: MoviesModuleComponent,
    children: [
      {
        path: '',
        component: MoviesListComponent
      },
      {
        path: 'movies',
        component: MoviesListComponent,
      },
      {
        path: 'movies/:type',
        component: MoviesListComponent
      },
      {
        path: 'movies/detail/:id',
        component: MoviesSeeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MoviesRoutingModule{}
