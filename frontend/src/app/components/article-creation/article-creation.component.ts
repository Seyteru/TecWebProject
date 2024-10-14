import { Component, inject } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LMarkdownEditorModule } from 'ngx-markdown-editor'
import { MarkdownModule } from 'ngx-markdown'
import { MatButtonModule } from '@angular/material/button';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-article-creation',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatIconModule, LMarkdownEditorModule, MarkdownModule, MatButtonModule, MatIconModule, NgClass],
  templateUrl: './article-creation.component.html',
  styleUrl: './article-creation.component.scss'
})
export class ArticleCreationComponent {

  private articleService = inject(ArticleService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  createArticleForm: FormGroup;
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
    if(tag && !this.tagExists(tag)){
      this.tags.push(this.formBuilder.control(tag));
    } else{
      this.dialog.open(AlertDialogComponent, {
        data: {
          title: 'Failure',
          content: 'You already added this Tag!'
        },
        width: '250px',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms'
      });
    }
  }

  removeTag(index: number){
    this.tags.removeAt(index);
  }

  onSubmit(){
    if(this.createArticleForm.valid){
      this.articleService.createArticle(this.createArticleForm.value).subscribe({
        next: () => {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Success',
              content: 'Successfully Created a new Article!'
            },
            width: '250px',
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms'
          });
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Failure',
              content: 'Failure on Create a new Article!'
            },
            width: '250px',
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms'
          });
          console.error(error);
        }
      });
    }
  }

  tagExists(tag: string): boolean{
    return this.tags.controls.some(control => control.value == tag);
  }

}
