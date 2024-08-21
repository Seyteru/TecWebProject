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
    const id = Number(this.route.snapshot.paramMap.get("articleId"));
    if(id){
      this.articleService.getArticleById(id).subscribe(
        data => {
          this.article = data;
        },
        error => {
          console.error("Error to retrieve articles", error);
        }
      )
    }
  }

  tagClick(tag: string){
    //Filter by tag
    console.log(`Tag clicked: ${tag}`)
  }

}
