import { Component, Input, OnInit, inject } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AsyncPipe ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private articleService: ArticleService){}
  @Input() articleId!: number;
  article$!: Observable<any>;

  ngOnInit(): void{
    this.article$ = this.articleService.getArticleById(1);
  }

}
