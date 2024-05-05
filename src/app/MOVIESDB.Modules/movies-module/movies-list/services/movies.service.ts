import { inject, Injectable } from '@angular/core';
//TODO: refactory imports 
import { ApiService } from '../../../../MOVIESDB.Core/services/api-service.service';
import { environment } from '../../../../../environments/environments';
import { DetailMovie, paginationMovies } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private ApiService = inject(ApiService);
  private API_KEY = environment.api_key;

  constructor() { }
  getMoviesPopular(pageCurrent: number) {
    return this.ApiService.getMethod<paginationMovies>('/movie/popular', { params: { api_key: this.API_KEY, page: pageCurrent }, loaderType: 'dna' });
  }

  getMoviesLatest(pageCurrent: number) {
    return this.ApiService.getMethod<paginationMovies>('/movie/now_playing', { params: { api_key: this.API_KEY, page: pageCurrent }, loaderType: 'dna' });
  }

  getMovieById(movieId: number) {
    return this.ApiService.getMethod<DetailMovie>(`/movie/${movieId}`, { params: { api_key: this.API_KEY }, loaderType: 'dna' });
  }
}
