import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { StatusSnackbarComponent } from '../components';

export type positionSnackbar = {
  verticalPosition: 'top' | 'button',
  horizonalPosition: 'end' | 'center' | 'left' | 'rigth'
};

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private _MatSnackbar: MatSnackBar = inject(MatSnackBar);

  openStatusGeneralSnackbar(message: string, duration: number, panelClass: string, { verticalPosition, horizonalPosition }: positionSnackbar) {
    this._MatSnackbar.openFromComponent(StatusSnackbarComponent, {
      duration: duration * 1000,
      panelClass,
      verticalPosition: verticalPosition as MatSnackBarVerticalPosition,
      horizontalPosition: horizonalPosition as MatSnackBarHorizontalPosition,
      data: { message, panelClass }
    })
  }

}