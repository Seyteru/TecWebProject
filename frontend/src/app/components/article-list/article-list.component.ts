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

  formatDate(isoString: string): string {
    const date = new Date(isoString);

    const year = String(date.getFullYear()).slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}/${month}/${day} ${hours}:${minutes}`;
  }

}
