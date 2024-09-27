import { Component, computed, Input, signal } from '@angular/core';
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

  @Input() title: string = 'Titolo';

  collapsed = signal(true);
  sidenavWidth = computed( () => this.collapsed() ? '56px' : '15%' );
  sidenavContent = computed( () => this.collapsed() ? 'calc(100% - 56px)' : '85%' );

}
