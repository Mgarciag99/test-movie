import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public isLogged$ = new BehaviorSubject<boolean>(false); 
  private Router = inject(Router);

  constructor() {
    this.isLogged$.next(!!this.sessionId);
  }

  get sessionId() {
    return localStorage.getItem('session_id')
  }
  setUserSession(session_id: string){
    localStorage.setItem('session_id', session_id);
    this.isLogged$.next(true)
  }

  closeSession(){
    localStorage.clear(),
    this.isLogged$.next(false);
    this.Router.navigate(['MOVIESDB/login'])
  }

}
