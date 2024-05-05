import { Injectable } from '@angular/core';
import { UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';


@Injectable({
  providedIn: 'root',
})
export class NoAuthenticationGuard  {

  constructor(
    private AuthService: AuthServiceService,
    private Router: Router,
  ) { }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {    
    let isLogged = false;
    this.AuthService.isLogged$.subscribe(isLoggedIn => {
      isLogged = isLoggedIn;
    });

    if (isLogged) this.Router.navigate(['MOVIESDB/movies']);

    return !isLogged;
  }
}