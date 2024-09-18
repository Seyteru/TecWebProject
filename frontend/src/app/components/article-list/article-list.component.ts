import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../datamodels/Article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent implements OnInit{

  articles: Article[] = [];
  currentPage: number = 1;

  private articleService = inject(ArticleService);

  ngOnInit(){
    this.getLatestArticleList(this.currentPage);
  }

  getLatestArticleList(page: number){
    this.articleService.getLatestArticles(page).subscribe({
      next: (articlesRetrieved) => {
        this.articles = articlesRetrieved;
      },
      error: (error) => {
        alert('Error on Get Latest Articles!');
        console.error(error);
      }
    });
  }

  onPageForward(){
    this.currentPage = this.currentPage + 1;
    this.getLatestArticleList(this.currentPage);
  }

  onPageBack(){
    this.currentPage = this.currentPage - 1;
    this.getLatestArticleList(this.currentPage);
  }

  totalPages(): number{
    if(this.articles.length == 0){
      return 1;
    } else{
      return Math.ceil(this.articles.length / 10);
    }
  }

}
