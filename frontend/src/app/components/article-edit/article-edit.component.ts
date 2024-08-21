import { Component, inject, OnInit } from '@angular/core';
import { Article } from '../../datamodels/Article';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.scss'
})
export class ArticleEditComponent implements OnInit{

  private articleService = inject(ArticleService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private article: Article | undefined;

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('articleId'));
    if(id){
      this.articleService.getArticleById(id).subscribe(
        data => {
          this.article = data;
        },
        error => {
          console.error("Error on retrive Article", error);
        }
      );
    }
  }

  onSubmit(){
    if(this.article){
      this.articleService.updateArticleById(this.article).subscribe(
        success => {
          this.router.navigate(['/article', this.article?.getArticleId]);
        },
        error => {
          console.error("Error on update Article", error);
          alert("Error on update Article");
        }
      );
    }
  }

}
