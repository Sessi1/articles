import { Injectable } from '@angular/core';
import {Article} from './DB/Article';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OtherArticle} from './DB/OtherArticle';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  public deleteArticle(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/articles/${id}`);
  }
  public getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  public addArticle(newArticle : OtherArticle): Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/articles/", newArticle);
  }


}
