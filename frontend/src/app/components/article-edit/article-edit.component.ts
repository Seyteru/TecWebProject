import { Component, inject } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { MarkdownModule } from 'ngx-markdown';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatIcon, LMarkdownEditorModule, MarkdownModule],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.scss'
})
export class ArticleEditComponent{

  private articleService = inject(ArticleService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  createArticleForm: FormGroup;
  errorMsg: string = '';
  articleContent: string = '';

  onContentChange(content: string){
    this.articleContent = content;
  }

  constructor(){
    this.createArticleForm = this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      body: ['', Validators.required],
      tags: this.formBuilder.array([])
    });
  }

  get tags(): FormArray{
    return this.createArticleForm.get('tags') as FormArray;
  }

  addTag(tag: string){
    this.tags.push(this.formBuilder.control(tag));
  }

  removeTag(index: number){
    this.tags.removeAt(index);
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
