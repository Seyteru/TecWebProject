import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { authorizationGuard } from './authorization.guard';

export const routes: Routes = [
    {
        path: "",
        title: "Home Page",
        component: HomepageComponent,
        canActivate: [authorizationGuard]
    },
    {
        path: "login",
        title: "Login",
        component: LoginComponent
    }
];
