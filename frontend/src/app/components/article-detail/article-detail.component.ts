import { Component, inject, OnInit } from '@angular/core';
import { Article } from '../../datamodels/Article';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MarkdownModule } from 'ngx-markdown';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [RouterLink, MarkdownModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent implements OnInit{

  private articleService = inject(ArticleService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  article: Article | undefined;

  ngOnInit(){
    this.getArticleDetails();
  }

  getArticleDetails(){
    const articleId = Number(this.route.snapshot.paramMap.get('id'));
    if(articleId){
      this.articleService.getArticleById(articleId).subscribe({
        next: (articleRetrieved: Article) => {
          this.article = articleRetrieved;
        }, 
        error: () => {
          alert('Error on Get Article!')
          this.router.navigate(['/home']);
        }
      });
    }
  }

}
