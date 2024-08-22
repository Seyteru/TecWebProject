import { Component, inject } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Article } from '../../datamodels/Article';

@Component({
  selector: 'app-article-creation',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './article-creation.component.html',
  styleUrl: './article-creation.component.scss'
})
export class ArticleCreationComponent {
  article: Article = new Article();

  private articleService = inject(ArticleService);
  private router = inject(Router);

  onSubmit(){
    this.articleService.createArticle(this.article).subscribe({
      next: (createdArticle) => {
        alert('Article Creation Success!');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert('Error on Create Article!');
        console.error(error);
      }
    });
  }

}
