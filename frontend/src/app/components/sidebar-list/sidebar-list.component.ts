import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { WarningDialogComponent } from "../warning-dialog/warning-dialog.component";
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

export type MenuItem = {
  icon: string;
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidebar-list',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterLink, RouterModule, WarningDialogComponent],
  templateUrl: './sidebar-list.component.html',
  styleUrl: './sidebar-list.component.scss'
})
export class SidebarListComponent {

  showDialog: boolean = false;

  private authService = inject(AuthenticationService);
  private userService = inject(UserService);
  private dialog = inject(MatDialog);
  
  authorId: number | null = this.userService.getUserId();


  openDialog(){
    const dialogRef = this.dialog.open(WarningDialogComponent, {
      width: '250px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms'
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res == true){
        this.onYesClick();
      } else{

      }
    });
  }

  onYesClick(){
    try {
      this.logout();
      this.dialog.open(AlertDialogComponent, {
        width: '250px',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms'
      });
    } catch (error) {

    }
  }

  isAdmin(): boolean{
    return this.userService.isAdmin();
  }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }

  logout(){
    return this.authService.logout();
  }
}
