import { Component, inject, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { MarkdownModule } from 'ngx-markdown';
import { Article } from '../../datamodels/Article';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatIcon, LMarkdownEditorModule, MarkdownModule, MatButtonModule, MatIconModule],
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
  errorMsg: string = '';
  articleContent: string = '';
  article: Article = new Article();

  ngOnInit(): void {
    this.editArticleForm = this.formBuilder.group({
      title: [''],
      subtitle: [''],
      body: [''],
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
            id: articleId,
            title: articleRetrieved.title,
            subtitle: articleRetrieved.subtitle,
            body: articleRetrieved.body,
            tags: articleRetrieved.tags,
          })
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Success',
              content: 'Successfully Edited Article!'
            },
            width: '250px',
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms'
          });
        }, 
        error: () => {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Failure',
              content: 'Failure on Edit Article!'
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


  onContentChange(content: string){
    this.articleContent = content;
  }

  get tags(): FormArray{
    return this.editArticleForm.get('tags') as FormArray;
  }

  addTag(tag: string){
    this.tags.push(this.formBuilder.control(tag));
  }

  removeTag(index: number){
    this.tags.removeAt(index);
  }

  onSubmit(){
    if(this.editArticleForm.valid){
      this.articleService.updateArticleById(this.article.id ,this.editArticleForm.value).subscribe({
        next: () => {
          alert('Article Update Success!');
          this.router.navigate(['/article', this.article.id]);
        },
        error: (error) => {
          this.errorMsg = 'Error on Update Article!'
          alert( `Article: ${this.editArticleForm.value} ${error.message}` );
          console.error(error);
        }
      });
    }
  }

}
