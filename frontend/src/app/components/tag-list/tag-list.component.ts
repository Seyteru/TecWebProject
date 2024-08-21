import { Component, inject, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article } from '../../datamodels/Article';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss'
})
export class TagListComponent implements OnInit{
  private articleService = inject(ArticleService);
  private route = inject(ActivatedRoute);
  articles: Article[] = [];
  tag: string | null = null;

  ngOnInit(){
    this.tag = this.route.snapshot.paramMap.get("tag");
    if(this.tag){
      this.articleService.getArticlesByTag(this.tag).subscribe(
        data => {
          this.articles = data;
        },
        error => {
          console.error("Error on retrieve Articles", error)
        }
      );
    }
  }

}
