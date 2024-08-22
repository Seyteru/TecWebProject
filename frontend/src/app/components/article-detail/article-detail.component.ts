import { Component, inject, OnInit } from '@angular/core';
import { Article } from '../../datamodels/Article';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent implements OnInit{

  private articleService = inject(ArticleService);
  private route = inject(ActivatedRoute);

  article: Article | undefined;

  ngOnInit(){
    this.getArticleDetails(this.route.snapshot.params['articleId']);
  }

  getArticleDetails(id: number){
    this.articleService.getArticleById(id).subscribe({
      next: (articleRetrieved) => {
        this.article = articleRetrieved;
      },
      error: (error) => {
        alert('Error on Get Article Details!');
        console.error(error);
      }
    });
  }

}
