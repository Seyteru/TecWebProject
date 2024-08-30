import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SidebarListComponent } from "../sidebar-list/sidebar-list.component";

export type MenuItem = {
  icon: string;
  text: string;
  route: string;
}


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonModule, RouterOutlet, RouterModule, SidebarListComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      text: 'Home',
      route: 'home'
    },
    {
      icon: 'create',
      text: 'Create Article',
      route: 'article-reation'
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

  collapsed = signal(false);
  sidenavWidth = computed( () => this.collapsed() ? '58px' : '250px' );


}
