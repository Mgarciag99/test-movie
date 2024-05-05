import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Subject, takeUntil } from 'rxjs';
import { AuthServiceService } from '../../../MOVIESDB.Core/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private FormBuilder = inject(FormBuilder)
  private LoginService = inject(LoginService); 
  private AuthService = inject(AuthServiceService)
  private Router = inject(Router);
  private unSubscribe = new Subject();

  formLogin = this.FormBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })


  login(){
    if(!this.formLogin.valid) return;

    this.LoginService.generateNewToken()
    .pipe(takeUntil(this.unSubscribe))
    .subscribe({
      next: ({request_token}) => {
        if(request_token){
          this.validateLogin(request_token)
        }
      },
      error: () => {

      }
    });

  }

  validateLogin(request_token: string){
    this.LoginService.validateLogin({
      ...this.formLogin.value,
      request_token
    }).pipe(takeUntil(this.unSubscribe))
    .subscribe({
      next: ({request_token}) => {
        this.createSession(request_token)
      }
    })
  }

  createSession(request_token: string){
    this.LoginService.createSession({
      request_token
    }).pipe(takeUntil(this.unSubscribe))
    .subscribe({
      next: (response) => {
        const {success, session_id} = response;
        if(success){
          //save in localstorage and redirect 
          this.AuthService.setUserSession(session_id);
          this.Router.navigate(['/MOVIESDB/movies/']);
        }
      },
      error: () =>{
        this.formLogin.enable();
      }
    })
  }

  ngOnDestroy() {
    this.unSubscribe.next(null)
    this.unSubscribe.complete()
}
}
