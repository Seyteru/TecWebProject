import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-warning-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, RouterLink],
  templateUrl: './warning-dialog.component.html',
  styleUrl: './warning-dialog.component.scss'
})
export class WarningDialogComponent {

  dialogTitle: string = 'Titolo';

  private dialogRef= inject(MatDialogRef<WarningDialogComponent>);

  onYesClick(){
    this.dialogRef.close(true);
  }

  onNoClick(){
    this.dialogRef.close(false);
  }

}
