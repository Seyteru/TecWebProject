import { Component, inject, Input } from '@angular/core';
import { ArticleListComponent } from "../article-list/article-list.component";
import { Article } from '../../datamodels/Article';
import { ArticleService } from '../../services/article.service';
import { UserService } from '../../services/user.service';
import { MarkdownModule } from 'ngx-markdown';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-article-list',
  standalone: true,
  imports: [ArticleListComponent, MarkdownModule, RouterLink],
  templateUrl: './user-article-list.component.html',
  styleUrl: './user-article-list.component.scss'
})
export class UserArticleListComponent {

  articles: Article[] = [];
  private articleService = inject(ArticleService);
  private userService = inject(UserService);

  totalArticles: number = 0;
  currentPage: number = 1;

  ngOnInit(){
    this.getLatestAuthorArticles(this.currentPage);
  }

  getLatestAuthorArticles(page: number){
    const id = this.userService.getUserId();
    this.articleService.getLatestAuthorArticles(id, page).subscribe({
      next: (articlesRetrieved) => {
        this.articles = articlesRetrieved;
      },
      error: (error) => {
        alert('Error on Get Latest Author Articles!');
        console.error(error);
      }
    });
  }

  onPageForward(){
    this.currentPage = this.currentPage + 1;
    this.getLatestAuthorArticles(this.currentPage);
  }

  onPageBack(){
    this.currentPage = this.currentPage - 1;
    this.getLatestAuthorArticles(this.currentPage);
  }

  totalPages(): number{
    if(this.totalArticles == 0){
      return 1;
    } else{
      return Math.ceil(this.totalArticles / 10);
    }
  }

}
