import { Component, inject, Input, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { MarkdownModule } from 'ngx-markdown';
import { Article } from '../../datamodels/Article';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatIcon, LMarkdownEditorModule, MarkdownModule, MatFormFieldModule,MatInputModule],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.scss'
})
export class ArticleEditComponent implements OnInit{

  private articleService = inject(ArticleService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
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
        }, 
        error: () => {
          alert('Error on Get Article!')
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
