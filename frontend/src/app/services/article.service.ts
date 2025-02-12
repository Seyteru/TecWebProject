import { inject, Injectable } from '@angular/core';
import { Article } from '../datamodels/Article';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url = 'http://localhost:3000/api/articles';
  private http = inject(HttpClient);
  private tokenService = inject(TokenService);

  getArticlesNumber(): Observable<{ totalArticles: number }>{
    return this.http.get<{ totalArticles: number }>(`${this.url}/count`);
  }

  getAuthorArticlesNumber(userId: number | null): Observable<{ totalArticles: number }>{
    return this.http.get<{ totalArticles: number }>(`${this.url}/author/${userId}/count`);
  }

  getArticlesByTagNumber(tag: string | null): Observable<{ totalArticles: number }>{
    return this.http.get<{ totalArticles: number }>(`${this.url}/tag/${tag}/count`);
  }

  getLatestArticles(page: number): Observable<Article[]>{
    return this.http.get<any>(`${this.url}/latest/${page}`);
  }

  getLatestArticlesByTag(tag: string, page: number): Observable<Article[]>{
    return this.http.get<any>(`${this.url}/latest/tag/${tag}/${page}`);
  }

  getArticleById(id: number): Observable<Article>{
    const restUrl = `${this.url}/${id}`;
    return this.http.get<Article>(restUrl);
  }

  getLatestAuthorArticles(id: number | null, page: number): Observable<Article[]>{
    return this.http.get<any>(`${this.url}/author/${id}/${page}`);
  }

  createArticle(article: any): Observable<any>{
    return this.http.post<any>(this.url, article);
  }

  updateArticleById(id: number | null | undefined, article: any): Observable<any>{
    const restUrl = `${this.url}/${id}`;
    return this.http.put<any>(restUrl, article);
  }

  deleteArticleById(id: number): Observable<any>{
    const restUrl = `${this.url}/${id}`;
    return this.http.delete<any>(restUrl);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failure: ${error.message}`);
      return of(result as T);
    };
  }

}
