import { Component, inject, Input, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article } from '../../datamodels/Article';
import { ArticleListComponent } from "../article-list/article-list.component";
import { MarkdownModule } from 'ngx-markdown';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [RouterLink, ArticleListComponent, MarkdownModule, MatIconModule, MatButtonModule],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss'
})
export class TagListComponent implements OnInit{

  articles: Article[] = [];
  private articleService = inject(ArticleService);
  private route = inject(ActivatedRoute);
  private dialog = inject(MatDialog);

  totalArticles: number = 0;
  currentPage: number = 1;
  currentTag: string | null = '';

  ngOnInit(){
    this.route.paramMap.subscribe(paramMap => {
      this.currentTag = paramMap.get('tag');
      this.getLatestArticlesByTag(this.currentPage, this.currentTag);
    });
  }

  getLatestArticlesByTag(page: number, tag: string | null){
    if(tag){
      this.articleService.getLatestArticlesByTag(tag, page).subscribe({
        next: (articleRetrieved) => {
          this.articles = articleRetrieved;
        }, 
        error: () => {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Failure',
              content: 'Failure on get Articles by Tag!'
            },
            width: '250px',
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms'
          });
        }
      });
    }
  }

  onPageForward(){
    this.currentPage = this.currentPage + 1;
    this.getLatestArticlesByTag(this.currentPage, this.currentTag);
  }

  onPageBack(){
    this.currentPage = this.currentPage - 1;
    this.getLatestArticlesByTag(this.currentPage, this.currentTag);
  }

  totalPages(): number{
    if(this.totalArticles == 0){
      return 1;
    } else{
      return Math.ceil(this.totalArticles / 10);
    }
  }

}
