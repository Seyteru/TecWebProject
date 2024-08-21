import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  private authService = inject(AuthenticationService)

  logout(){
    this.authService.logout();
  }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }
}
