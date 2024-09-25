import { Component, OnInit, inject } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ArticleListComponent } from "../article-list/article-list.component";
import { Article } from '../../datamodels/Article';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AsyncPipe, ArticleListComponent, MatIconModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private articleService = inject(ArticleService);

  articles: Article[] = [];
  totalArticles: number = 0;
  currentPage: number = 1;

  ngOnInit(){
    this.getArticlesNumber();
    this.getLatestArticleList(this.currentPage);
  }

  getArticlesNumber(){
    this.articleService.getArticlesNumber().subscribe({
      next: (articlesNumber) => {
        this.totalArticles = articlesNumber.totalArticles;
      },
      error: (error) => {
        alert('Error on Get Articles Number');
        console.error(error);
      }
    });
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
    if(this.totalArticles == 0){
      return 1;
    } else{
      return Math.ceil(this.totalArticles / 10);
    }
  }

}
