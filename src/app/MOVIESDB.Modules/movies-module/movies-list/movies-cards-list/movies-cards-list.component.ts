import { Component, inject, Input, OnInit } from '@angular/core';
import { Movie } from '../interfaces';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movies-cards-list',
  templateUrl: './movies-cards-list.component.html',
  styleUrls: ['./movies-cards-list.component.css']
})
export class MoviesCardsListComponent {
  private FormBuilder = inject(FormBuilder)
  @Input() MoviesList: Movie[] = [];
  @Input() totalMovies!: number;

  formFilter = this.FormBuilder.group({
    search: '',
  })


  
}
