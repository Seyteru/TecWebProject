import { Component, inject, Signal, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';

export type MenuItem = {
  icon: string;
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidebar-list',
  standalone: true,
  imports: [ MatListModule, MatIconModule, RouterLink, RouterModule ],
  templateUrl: './sidebar-list.component.html',
  styleUrl: './sidebar-list.component.scss'
})
export class SidebarListComponent {

  private authService = inject(AuthenticationService);
  private userService = inject(UserService);

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      text: 'Home',
      route: 'home'
    },
    {
      icon: 'create',
      text: 'Create Article',
      route: 'article-creation'
    },
    {
      icon: 'login',
      text: 'Login',
      route: 'login'
    },
    {
      icon: 'logout',
      text: 'Logout',
      route: 'home'
    }
  ]);

  isAdmin(): boolean{
    return this.userService.isAdmin();
  }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }
}
