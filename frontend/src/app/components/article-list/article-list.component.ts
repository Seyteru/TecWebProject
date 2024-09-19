import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../datamodels/Article';
import { ArticleService } from '../../services/article.service';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [RouterLink, MarkdownModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {

  @Input() articles: Article[] = [];

}
