import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleAuthenticationComponent } from './module-authentication.component';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './module-authentication.routing';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationRoutingModule,
    LoginModule
  ],
  exports: [

  ],
  declarations: [
    ModuleAuthenticationComponent
  ]
})
export class ModuleAuthenticationModule { }
