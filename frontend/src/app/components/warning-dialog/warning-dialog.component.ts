import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-warning-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, RouterLink],
  templateUrl: './warning-dialog.component.html',
  styleUrl: './warning-dialog.component.scss'
})
export class WarningDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, content: string }){}

  private dialogRef= inject(MatDialogRef<WarningDialogComponent>);

  onYesClick(){
    this.dialogRef.close(true);
  }

  onNoClick(){
    this.dialogRef.close(false);
  }

}
