import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoaderService } from './loader-service.service';
import { SnackbarService } from './snack-service.service';

export type ApiLoaderType = 'loader' | 'dna' | 'skeleton' | 'none' | 'skeletonComponent' | 'skeletonTableModal';
export type ApiMoreOptions = {
  params?: any,
  loaderType?: ApiLoaderType,
  showMessage?: boolean,
};

export type ISuccessResponse = {
  code: string
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private SnackbarService: SnackbarService = inject(SnackbarService);
  private HttpClient: HttpClient = inject(HttpClient);
  private LoaderService: LoaderService = inject(LoaderService)
  message: any;

  paramsFilter(params: any) {
    if (params) {
      return Object.keys(params).reduce((acc: any, key: string) => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          acc[key] = params[key];
        }
        return acc;
      }, {});
    }
  }

  showLoader(loaderType: ApiLoaderType = "loader") {
    if (loaderType === 'loader') this.LoaderService.showLoader();
    if (loaderType === 'dna') this.LoaderService.showDNALoader();
    if (loaderType === 'skeleton') this.LoaderService.showSkeletonLoader();
    if (loaderType === 'skeletonComponent') this.LoaderService.showSkeletonLoaderComponent();
    if (loaderType === 'skeletonTableModal') this.LoaderService.showSkeletonLoaderTableModal();


  }

  hideLoader(loaderType: ApiLoaderType = "loader") {
    if (loaderType === 'loader') this.LoaderService.hideLoader();
    if (loaderType === 'dna') this.LoaderService.hideDNALoader();
    if (loaderType === 'skeleton') this.LoaderService.hideSkeletonLoader();
    if (loaderType === 'skeletonComponent') this.LoaderService.hideSkeletonLoaderComponent();
    if (loaderType === 'skeletonTableModal') this.LoaderService.hideSkeletonLoaderTableModal();
  }

  getMethod<T>(endpoint: string, { params, loaderType }: ApiMoreOptions = {}) {
    this.showLoader(loaderType);
    const url: string = `${environment.baseURL}${endpoint}`
    return this.HttpClient.get<T>(url, { params, withCredentials: false }).pipe(
      tap((response: T) => {
        this.hideLoader(loaderType);
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        this.hideLoader(loaderType);
        if (error.status == 0) this.showErrorMessage('Error message');
        if (!error.ok) this.showErrorMessage(error.error.errors?.msg);
        this.showErrorMessage("Error Message");
        return throwError(() => true);
      }),
    );
  }

  getMethodWithId<T>(endpoint: string, id: number, { params, loaderType }: ApiMoreOptions = {}) {
    this.showLoader(loaderType);
    const urlWithId: string = `${environment.baseURL}${endpoint}/${id}`;
    return this.HttpClient.get<T>(urlWithId, { params, withCredentials: true }).pipe(
      tap((response: T) => {
        this.hideLoader(loaderType);
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        this.hideLoader(loaderType);
        if (error.status == 0) this.showErrorMessage("Error Message");
        if (!error.ok) this.showErrorMessage(error.error.errors?.msg);
        this.showErrorMessage("Error Message");
        return throwError(() => true);
      }),
    );
  }


  postMethod<T>(endpoint: string, data: any, { params, loaderType, showMessage }: ApiMoreOptions = {}, urlParams: any = {}) {
    let url: string = `${environment.baseURL}${endpoint}`
    Object.keys(urlParams).map((key: string) => {
      if (urlParams.hasOwnProperty(key)) {
        url += `/${urlParams[key]}`
      }
    });
    this.showLoader(loaderType);
    return this.HttpClient.post<T>(url, data, { params , withCredentials: false }).pipe(
      tap((response: T) => {
        this.hideLoader(loaderType);
        if (showMessage != false) {
          this.showSuccessMessage("Success Message");
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.hideLoader(loaderType);
        if (error.status == 0) this.showErrorMessage("Error Message");
        this.showErrorMessage("Error Message");
        return throwError(() => error);
      }),
    );
  }

  putMethod<T>(endpoint: string, data: any, { params, loaderType }: ApiMoreOptions = {}, urlParams: Object[] = []) {
    const url: string = `${environment.baseURL}${endpoint}`
    Object.keys(urlParams).map((key: string) => {
      console.log(key)
    })
    this.showLoader(loaderType);
    return this.HttpClient.put<T>(url, data, { params, withCredentials: true }).pipe(
      tap((response: T): void => {
        this.message = response
        this.hideLoader(loaderType);
        this.showSuccessMessage("Success Message");
      }),
      catchError((putError: HttpErrorResponse) => {
        this.hideLoader(loaderType);
        if (putError.status == 0) {
          this.showErrorMessage("Error Message");
        }
        this.showErrorMessage("Error Message");
        return throwError((): boolean => true);
      }),
    );
  }

  putMethodWithId<T>(endpoint: string, data: any, id: number, { params, loaderType }: ApiMoreOptions = {}) {
    const urlWithId: string = `${environment.baseURL}${endpoint}/${id}`;

    this.showLoader(loaderType);
    return this.HttpClient.put<T>(urlWithId, data, { params, withCredentials: true }).pipe(
      tap((putResponse: T): void => {
        this.message = putResponse
        this.hideLoader(loaderType);
        this.showSuccessMessage("Success Message");
      }),
      catchError((putErrorResponse: HttpErrorResponse) => {
        this.hideLoader(loaderType);
        if (putErrorResponse.status == 0) {
          this.showErrorMessage("Error Message");
        }
        this.showErrorMessage("Error Message");
        return throwError((): boolean => true);
      }),
    );
  }

  patchMethod<T>(endpoint: string, data: any, { params, loaderType }: ApiMoreOptions = {}) {
    const url: string = `${environment.baseURL}${endpoint}`
    this.showLoader(loaderType);
    return this.HttpClient.patch<T>(url, data, { params, withCredentials: true }).pipe(
      tap((response: T): void => {
        this.message = response
        this.hideLoader(loaderType);
        this.showSuccessMessage("Success Message");
      }),
      catchError((patchError: HttpErrorResponse) => {
        this.hideLoader(loaderType);
        if (patchError.status == 0) {
          this.showErrorMessage("Error Message");
        }
        this.showErrorMessage("Error Message");
        return throwError(() => true);
      }),
    );
  }

  deleteMethod<T>(endpoint: string, data: any, { params, loaderType }: ApiMoreOptions = {}) {
    const url: string = `${environment.baseURL}${endpoint}`
    this.showLoader(loaderType);
    return this.HttpClient.delete<T>(url, {params, withCredentials: false}).pipe(
      tap((): void => {
        this.hideLoader(loaderType);
        this.showSuccessMessage('Eliminado Correctamente');
      }),
      catchError((error: HttpErrorResponse) => {
        this.hideLoader(loaderType);
        this.showErrorMessage("Error Message");
        return throwError((): boolean => true);
      }),
    );
  }



  showErrorMessage(message: string) {
    return this.SnackbarService.openStatusGeneralSnackbar(message, 2.5, 'error-snackbar', { verticalPosition: 'top', horizonalPosition: 'center' });
  }

  showSuccessMessage(message: string) {
    return this.SnackbarService.openStatusGeneralSnackbar(message, 2.5, 'success-snackbar', { verticalPosition: 'top', horizonalPosition: 'center' });
  }


}