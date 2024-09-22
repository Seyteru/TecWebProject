import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../datamodels/Article';
import { MarkdownModule } from 'ngx-markdown';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [RouterLink, MarkdownModule, MatCardModule, MatButtonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {

  @Input() articles: Article[] = [];

}
