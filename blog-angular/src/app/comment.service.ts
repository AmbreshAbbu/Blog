import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentPayload } from './comment/comment-payload';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getPost(permaLink: Number):Observable<Array<CommentPayload>>{
    return this.httpClient.get<Array<CommentPayload>>('http://localhost:8080/api/v1/posts/' + permaLink + '/comments');
  }

  addComment(permaLink: Number, commentPayload: CommentPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/v1/posts/' + permaLink + '/comments', commentPayload);
  }

  
}
