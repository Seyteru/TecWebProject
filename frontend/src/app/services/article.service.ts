import { inject, Injectable } from '@angular/core';
import { Article } from '../datamodels/Article';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url = 'http://localhost:3000/api/articles';
  private http = inject(HttpClient);
  private tokenService = inject(TokenService);

  getLatestArticles(page: number): Observable<any>{
    return this.http.get<any>(`${this.url}/latest/${page}`);
  }

  getArticleById(articleId: number): Observable<Article>{
    const restUrl = `${this.url}/${articleId}`;
    return this.http.get<Article>(restUrl);
  }

  getArticlesByTag(tag: string): Observable<Article[]>{
    const restUrl = `${this.url}?tag=${tag}`;
    return this.http.get<Article[]>(restUrl).pipe(
      catchError(this.handleError<Article[]>('getArticlesByTag', []))
    );
  }

  createArticle(article: any): Observable<any>{
    return this.http.post<any>(this.url, article, {
      headers: { Authorization: `Bearer ${this.tokenService.getToken()}` }
    });
  }

  updateArticleById(article: Article): Observable<Article>{
    const restUrl = `${this.url}/${article.articleId}`;
    return this.http.put<Article>(restUrl, article).pipe(
      catchError(this.handleError<Article>('updateArticle'))
    );
  }

  deleteArticleById(articleId: number): Observable<unknown>{
    const restUrl = `${this.url}/${articleId}`;
    return this.http.delete(restUrl).pipe(
      catchError(this.handleError('deleteArticleById'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failure: ${error.message}`);
      return of(result as T);
    };
  }

}
