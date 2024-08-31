import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleCreationComponent } from './components/article-creation/article-creation.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'login',
        title: 'Login',
        component: LoginComponent
    },
    {
        path: 'article/:id',
        title: 'Article Detail',
        component: ArticleDetailComponent
    },
    {
        path: 'article-creation',
        title: 'Article Creation',
        component: ArticleCreationComponent
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
