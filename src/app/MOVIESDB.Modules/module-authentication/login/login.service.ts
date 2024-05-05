import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../MOVIESDB.Core/services/api-service.service';
import { PayloadToken, PayloadValidateLogin, ResponseCreateSession, ResponseToken, ResponseValidateLogin } from './interfaces';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private ApiService = inject(ApiService);
  private API_KEY = environment.api_key;
  
  generateNewToken() {
    return this.ApiService.getMethod<ResponseToken>('/authentication/token/new', { params: { api_key: this.API_KEY }, loaderType: 'dna' });
  }
  validateLogin(payload:PayloadValidateLogin) {
    return this.ApiService.postMethod<ResponseValidateLogin>('/authentication/token/validate_with_login', payload, { params: { api_key: this.API_KEY }, loaderType: 'dna' })
  }

  createSession(payload:PayloadToken ){
    return this.ApiService.postMethod<ResponseCreateSession>('/authentication/session/new', payload, { params: { api_key: this.API_KEY }, loaderType: 'dna' })
  }

  deleteSession(payload: any){
    return this.ApiService.deleteMethod<ResponseCreateSession>('/authentication/session/delete', payload, { params: { api_key: this.API_KEY }, loaderType: 'dna' })
  }

}
