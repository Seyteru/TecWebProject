import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HomeComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  title: string | undefined = 'Titolo';

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.route.firstChild;
        while(route?.firstChild){
          route = route.firstChild;
        }
        return route?.snapshot.data['title'] || 'Titolo';
      })
    ).subscribe((toolbarTitle) => {
      this.title = toolbarTitle;
    });
  }
}
