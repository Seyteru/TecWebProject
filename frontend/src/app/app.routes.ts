import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleCreationComponent } from './components/article-creation/article-creation.component';
import { RegisterComponent } from './components/register/register.component';
import { authorizationGuard } from './authorization.guard';
import { UserArticleListComponent } from './components/user-article-list/user-article-list.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

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
        path: 'article/edit/:id',
        title: 'Article Edit',
        component: ArticleEditComponent
    },
    {
        path: 'article-creation',
        title: 'Article Creation',
        component: ArticleCreationComponent,
        canActivate: [authorizationGuard]
    },
    {
        path: 'article/author/:id',
        title: 'Author Articles',
        component: UserArticleListComponent
    },
    {
        path: 'article/tag/:tag',
        title: 'Tag Articles',
        component: TagListComponent
    },
    {
        path: 'register',
        title: 'Register',
        component: RegisterComponent,
        canActivate: [authorizationGuard]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
