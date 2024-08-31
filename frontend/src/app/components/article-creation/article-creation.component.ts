import { Component, inject } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../../datamodels/Article';
import { MarkdownModule } from 'ngx-markdown'

@Component({
  selector: 'app-article-creation',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MarkdownModule ],
  templateUrl: './article-creation.component.html',
  styleUrl: './article-creation.component.scss'
})
export class ArticleCreationComponent {

  private articleService = inject(ArticleService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  createArticleForm: FormGroup;
  errorMsg: string = '';

  constructor(){
    this.createArticleForm = this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.createArticleForm.valid){
      this.articleService.createArticle(this.createArticleForm.value).subscribe({
        next: () => {
          alert('Article Creation Success!');
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.errorMsg = 'Error on Create Article!'
          alert( `Article: ${this.createArticleForm.value} ${error.message}` );
          console.error(error);
        }
      });
    }
  }

}
