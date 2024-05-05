import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../MOVIESDB.Modules/movies-module/movies-list/interfaces';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterModule
  ],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input({required: true}) Movie!: Movie;


}
