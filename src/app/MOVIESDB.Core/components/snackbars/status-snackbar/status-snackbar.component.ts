import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

export interface SnackData {
  message: string;
  panelClass: string;
}

@Component({
  selector: 'app-status-snackbar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  templateUrl: './status-snackbar.component.html',
  styleUrl: './status-snackbar.component.css',
})
export class StatusSnackbarComponent {

  snackbarRef: MatSnackBarRef<StatusSnackbarComponent> = inject(MatSnackBarRef);
  message: string = '';

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public dataSnackBar: SnackData,
  ) { 
    this.message = dataSnackBar.message;
  }

  get getTypeTitle(){
    const { panelClass } = this.dataSnackBar;
    return (panelClass === 'success-snackbar') ? 'success' : 'error';
  }
}
