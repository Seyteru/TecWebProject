import { Component, inject, Input } from '@angular/core';
import { Article } from '../../datamodels/Article';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Article1{
  articleId: number;
  title: string;
  subtilte: string;
  body: string;
  creationDate: Date;
  lastModified: Date;
  tag: string[];
}

@Component({
  selector: 'app-article-creation',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './article-creation.component.html',
  styleUrl: './article-creation.component.scss'
})
export class ArticleCreationComponent {
  article: Article1 | undefined;
  newArticle: Article1 = {
    articleId: 0,
    title: '',
    subtilte: '',
    body: '',
    creationDate: new Date(),
    lastModified: new Date(),
    tag: []
  }
  private articleService = inject(ArticleService) 
  private router = inject(Router)
  body: string | undefined;
  tag: string[] | null | undefined;
  createArticleForm = new FormGroup({
    title: new FormControl(""),
    subtitle: new FormControl("")
  });

  onSubmit(){
    this.articleService.createArticle(this.newArticle).subscribe(
      (res) => {
        console.log('User created', res);
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
