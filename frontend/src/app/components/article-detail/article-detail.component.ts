import { Component, inject, OnInit } from '@angular/core';
import { Article } from '../../datamodels/Article';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MarkdownModule } from 'ngx-markdown';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [RouterLink, MarkdownModule, MatCardModule, MatButtonModule, RouterLink, MatIconModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent implements OnInit{

  private articleService = inject(ArticleService);
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  article: Article | undefined;

  ngOnInit(){
    this.getArticleDetails();
  }

  getArticleDetails(){
    const articleId = Number(this.route.snapshot.paramMap.get('id'));
    if(articleId){
      this.articleService.getArticleById(articleId).subscribe({
        next: (articleRetrieved: Article) => {
          this.article = articleRetrieved;
        }, 
        error: () => {
          alert('Error on Get Article!')
          this.router.navigate(['/home']);
        }
      });
    }
  }

  formatDate(isoString: string): string {
    const date = new Date(isoString);

    const year = String(date.getFullYear()).slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}/${month}/${day} ${hours}:${minutes}`;
  }

  isOwner(): boolean{
    const userId = this.userService.getUserId();
    if(userId == this.article?.userId){
      return true;
    } else{
      return false;
    }
  }

  isAdmin(): boolean{
    return this.userService.isAdmin();
  }

}
