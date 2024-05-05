import { Injectable } from '@angular/core';
import { UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard  {
  constructor(
    private AuthService: AuthServiceService,
    private router: Router,
  ) {}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.AuthService.isLogged$.pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['MOVIESDB/login']);
        }
      }),
    );
  }
}