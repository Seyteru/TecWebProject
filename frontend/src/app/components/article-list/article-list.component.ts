import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../datamodels/Article';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {

  @Input() articles: Article[] = [];
  @Input() showExtract: boolean = false;
  // @Output() pageChange: new EventEmitter<number>();

  tagClick(tag: string){
    //Filter by tag
    console.log(`Tag clicked: ${tag}`)
  }

  // changePage(pageNumber: number){
  //   this.pageChange.emit(pageNumber);
  // }
}
