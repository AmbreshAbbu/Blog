import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostPayload } from './add-post/post-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {
  getMyPosts(userName: String): Observable<PostPayload[]> {
    return this.httpClient.get<Array<PostPayload>>("http://localhost:8080/api/posts/byName?username=" + userName);
  }

  constructor(private httpClient: HttpClient) { }

  addPost(postPayload: PostPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/posts', postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>("http://localhost:8080/api/posts");
  }

  getPost(permaLink: Number):Observable<PostPayload>{
    return this.httpClient.get<PostPayload>('http://localhost:8080/api/posts/' + permaLink);
  }
}
