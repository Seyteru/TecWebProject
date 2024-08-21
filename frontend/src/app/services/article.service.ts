import { inject, Injectable } from '@angular/core';
import { Article } from '../datamodels/Article';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url = 'http://localhost:5432/articles';
  private authService = inject(AuthenticationService)
  constructor(private http: HttpClient){}

  getLatestArticles(): Observable<any>{
    return this.http.get<any>(this.url);
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
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.url, article, { headers });
  }

  updateArticleById(article: Article): Observable<Article>{
    const restUrl = `${this.url}/${article.getArticleId}`;
    const headers = this.getAuthHeaders();
    return this.http.put<Article>(restUrl, article, { headers }).pipe(
      catchError(this.handleError<Article>('updateArticle'))
    );
  }

  deleteArticleById(articleId: number): Observable<unknown>{
    const restUrl = `${this.url}/${articleId}`;
    const headers = this.getAuthHeaders();
    return this.http.delete(restUrl, { headers }).pipe(
      catchError(this.handleError('deleteArticleById'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failure: ${error.message}`);
      return of(result as T);
    };
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

}
