import { Component, inject, Input, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article } from '../../datamodels/Article';
import { ArticleListComponent } from "../article-list/article-list.component";
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [RouterLink, ArticleListComponent, MarkdownModule],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss'
})
export class TagListComponent implements OnInit{

  articles: Article[] = [];
  private articleService = inject(ArticleService);
  private route = inject(ActivatedRoute);

  totalArticles: number = 0;
  currentPage: number = 1;
  tag: string | null = '';

  ngOnInit(){
    this.getLatestArticlesByTag(this.currentPage);
  }

  getLatestArticlesByTag(page: number){
    this.tag = this.route.snapshot.paramMap.get('tag');
    if(this.tag){
      this.articleService.getLatestArticlesByTag(this.tag, page).subscribe({
        next: (articleRetrieved) => {
          this.articles = articleRetrieved;
        }, 
        error: () => {
          alert('Error on Get Article By Tag!')
        }
      });
    }
  }

  onPageForward(){
    this.currentPage = this.currentPage + 1;
    this.getLatestArticlesByTag(this.currentPage);
  }

  onPageBack(){
    this.currentPage = this.currentPage - 1;
    this.getLatestArticlesByTag(this.currentPage);
  }

  totalPages(): number{
    if(this.totalArticles == 0){
      return 1;
    } else{
      return Math.ceil(this.totalArticles / 10);
    }
  }

}
