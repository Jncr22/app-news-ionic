import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}) 
export class NewsService {
  private apiKey = 'Your_API'; 
  constructor(private http: HttpClient) { }

  getTopHeadlines(): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;
    return this.http.get(url).pipe(map(response => response));
  }

  getArticleDetails(articleId: string): Observable<any> {
    const url = `https://newsapi.org/v2/everything?sources=${articleId}&apiKey=${this.apiKey}`;
    return this.http.get(url).pipe(map(response => response));
  }
}




