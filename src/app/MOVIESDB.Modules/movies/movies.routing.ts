import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { NgModule } from '@angular/core';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  { 
    path: '' ,
    component: MoviesComponent,
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
        path: 'current',
        component: MoviesListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MoviesRoutingModule{}
