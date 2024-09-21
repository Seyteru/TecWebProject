import { Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [ MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
  templateUrl: './alert-dialog.component.html',
  styleUrl: './alert-dialog.component.scss'
})
export class AlertDialogComponent {

  dialogTitle: string = 'Titolo';

  private dialogRef= inject(MatDialogRef<AlertDialogComponent>);

}
