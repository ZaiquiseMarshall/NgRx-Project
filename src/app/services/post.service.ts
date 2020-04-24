import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(): Observable<any> {
    let url = 'http://jsonplaceholder.typicode.com/posts';
    return this.http.get<Observable<any>>(url)
      .pipe(
        catchError(error => {
          throw `Error occured. Details: ${error}`;
        })
      );
  }

  getComments(id): Observable<any> {
    let url = `http://jsonplaceholder.typicode.com/comments?postId=${id}`;
    return this.http.get<Observable<any>>(url)
    .pipe(
      catchError(error => {
        throw `Error occured. Details: ${error}`;
      })
    );
  }
}
