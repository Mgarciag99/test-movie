import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  standalone: true,
  imports: [
    RouterModule,
  ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private AuthServiceService = inject(AuthServiceService)
  constructor() { }

  ngOnInit() {
  }

  signOut(){
    this.AuthServiceService.closeSession();
  }

}
