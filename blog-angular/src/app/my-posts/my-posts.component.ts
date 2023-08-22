import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayload } from '../add-post/post-payload';
import { AddPostService } from '../add-post.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  posts!: Observable<Array<PostPayload>>;
  userName!: String;

  constructor(private postService: AddPostService, private $localStorage: LocalStorageService) { }

  ngOnInit() {
    this.userName = this.$localStorage.retrieve("username");
    this.posts = this.postService.getMyPosts(this.userName);
  }
}
