import { Component, inject, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { MarkdownModule } from 'ngx-markdown';
import { Article } from '../../datamodels/Article';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { NgClass } from '@angular/common';
import { WarningDialogComponent } from '../warning-dialog/warning-dialog.component';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatIcon, LMarkdownEditorModule, MarkdownModule, MatButtonModule, MatIconModule, NgClass],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.scss'
})
export class ArticleEditComponent implements OnInit{

  private articleService = inject(ArticleService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private dialog = inject(MatDialog)

  editArticleForm!: FormGroup;
  articleContent: string = '';
  article: Article = new Article();

  ngOnInit(): void {
    this.editArticleForm = this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      body: ['', Validators.required],
      tags: this.formBuilder.array([])
    });
    this.getArticleDetails();
  }

  getArticleDetails(){
    const articleId = Number(this.route.snapshot.paramMap.get('id'));
    if(articleId){
      this.articleService.getArticleById(articleId).subscribe({
        next: (articleRetrieved) => {
          this.article = articleRetrieved;
          this.editArticleForm.patchValue({
            title: articleRetrieved.title,
            subtitle: articleRetrieved.subtitle,
            body: articleRetrieved.body,
          });
          this.setTags(articleRetrieved.tags);
        }, 
        error: () => {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Failure',
              content: 'Failure on get Article!'
            },
            width: '250px',
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms'
          });
          this.router.navigate(['/home']);
        }
      });
    }
  }

  setTags(tags: string[]){
    const tagsArray = this.tags;
    tags.forEach(tag => {
      tagsArray.push(this.formBuilder.control(tag));
    })
  }

  get tags(): FormArray{
    return this.editArticleForm.get('tags') as FormArray;
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

  tagExists(tag: string): boolean{
    return this.tags.controls.some(control => control.value == tag);
  }

  onSubmit(){
    if(this.editArticleForm.valid){
      this.articleService.updateArticleById(this.article.id ,this.editArticleForm.value).subscribe({
        next: () => {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Success',
              content: 'Successfully Edited Article!'
            },
            width: '250px',
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms'
          });
          this.router.navigate(['/article', this.article.id]);
        },
        error: (error) => {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Failure',
              content: 'Failure on Edit Article!'
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

  onDeleteClick(){
    const dialogRef = this.dialog.open(WarningDialogComponent, {
      data: {
        title: 'Delete',
        content: 'Would you like to Delete the Article?'
      },
      width: '250px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms'
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res == true){
        this.onYesClick();
      } else{

      }
    });
  }

  onYesClick(){
    if(this.article.id){
      this.articleService.deleteArticleById(this.article.id).subscribe({
        next: () => {
          this.router.navigate(['/home']);
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Success',
              content: 'Successfully Deleted Article!'
            },
            width: '250px',
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms'
          });
        },
        error: (error) => {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Failure',
              content: 'Failure on Delete Article!'
            },
            width: '250px',
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms'
          });
          console.log(error);
        }
      })
    }
  }

}
