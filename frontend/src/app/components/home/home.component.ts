import { Component, Input, OnInit, inject } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ArticleListComponent } from "../article-list/article-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AsyncPipe, ArticleListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private articleService = inject(ArticleService)

  articles: Observable<any> | undefined;

  ngOnInit(): void{
    this.articles = this.articleService.getLatestArticles();
  }

}
