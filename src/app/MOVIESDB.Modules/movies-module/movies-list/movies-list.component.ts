import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { Subject, takeUntil } from 'rxjs';
import { Movie } from './interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  private MoviesService = inject(MoviesService);
  private ActivatedRoute = inject(ActivatedRoute);
  private unSubscribe = new Subject();
  moviesList: Movie[] = [];
  pageCurrent: number = 1;
  totalMovies!: number;
  typeMovie: string = '';
  constructor() {
    this.getMovieByType();
  }


  getMovieByType() {
    this.ActivatedRoute.params.pipe(takeUntil(this.unSubscribe))
      .subscribe({
        next: ({ type }) => {
          this.restartValues(type)
        }
      })
  }

  restartValues(type: string){
    this.pageCurrent = 1;
    this.moviesList = [];
    this.typeMovie = type;
    this.getMovies();
  }

  getMovies() {
    let serviceCall = this.MoviesService.getMoviesPopular(this.pageCurrent)

    if (this.typeMovie === 'latest') {
      serviceCall = this.MoviesService.getMoviesLatest(this.pageCurrent)
    } else if (this.typeMovie === 'top') {
      serviceCall = this.MoviesService.getMoviesPopular(this.pageCurrent)
    }

    serviceCall
      .pipe(takeUntil(this.unSubscribe))
      .subscribe({
        next: ({
          page,
          results,
          total_pages,
          total_results
        }) => {
          this.moviesList = [...this.moviesList, ...results];
          this.totalMovies = total_results;
        }
      })
  }

  onScrollUp() {
    console.log("scrolled up!!");
  }

  onScrollDown() {
    this.pageCurrent++;
    this.getMovies();
  }
}
