import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

export const routes: Routes = [
    {
        path: "home",
        title: "Home",
        component: HomeComponent
    },
    {
        path: "login",
        title: "Login",
        component: LoginComponent
    },
    {
        path: "articleDetail", //Change with parametric route
        title: "Article Detail",
        component: ArticleDetailComponent
    }
];
