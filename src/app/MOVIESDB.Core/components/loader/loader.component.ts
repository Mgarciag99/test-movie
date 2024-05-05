import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../../services/loader-service.service';
import { CommonModule } from '@angular/common';

@Component({ 
  standalone: true,
  imports: [
    CommonModule
  ],
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoaderComponent {
  constructor(public loader: LoaderService) {}
}
