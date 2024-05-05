import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../MOVIESDB.Core/components';
import { MoviesRoutingModule } from './movies.routing';
import { RouterModule } from '@angular/router';
import { MoviesListModule } from './movies-list/movies-list.module';
import { MoviesModuleComponent } from './movies-module.component';
import { FooterComponent } from '../../MOVIESDB.Core/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MoviesRoutingModule, 
    MoviesListModule,
    //standalone components
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    MoviesListModule
  ],
  declarations: [
    MoviesModuleComponent
  ]
})
export class MoviesModule {}
