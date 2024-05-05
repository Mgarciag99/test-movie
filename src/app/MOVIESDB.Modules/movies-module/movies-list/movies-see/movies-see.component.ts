import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import { DetailMovie } from '../interfaces';

@Component({
  selector: 'app-movies-see',
  templateUrl: './movies-see.component.html',
  styleUrls: ['./movies-see.component.css']
})
export class MoviesSeeComponent {
  private ActivatedRoute = inject(ActivatedRoute);
  private MovieService = inject(MoviesService)
  private unSubscribe = new Subject();
  detailMovie: DetailMovie = {} as DetailMovie; 
  constructor() {
    this.getIdMovie(); 
  }

  getIdMovie() {
    this.ActivatedRoute.params.pipe(takeUntil(this.unSubscribe))
      .subscribe({
        next: ({ id }) => {
          console.log(id);
          this.getMovieById(id)
        }
      })
  }

  getMovieById(id: number){
    this.MovieService.getMovieById(id).pipe(takeUntil(this.unSubscribe))
    .subscribe({
      next: (data) => {
        this.detailMovie = data;
      }
    })
  }

}
