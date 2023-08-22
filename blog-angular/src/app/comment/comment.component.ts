import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../comment.service';
import { CommentPayload } from './comment-payload';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{

  comments!: Observable<Array<CommentPayload>>;
  permaLink!: Number;

  commentForm: FormGroup;
  commentPayload: CommentPayload;

  constructor(private router: ActivatedRoute, private commentService: CommentService, private routerTo:Router, private $localStorage: LocalStorageService) {
    this.commentForm = new FormGroup({
      body: new FormControl()
    });
    this.commentPayload = {
      id: '',
      name: '',
      body: ''
    };
  }

  onSubmit(){
    this.commentPayload.body = this.commentForm.get('body')!.value;
    this.commentPayload.name = this.$localStorage.retrieve("username");
    this.commentService.addComment(this.permaLink, this.commentPayload).subscribe(data => {
      location.reload() 
    }, error => {
      console.log('Failure Response');
    })
  }

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.comments = this.commentService.getPost(this.permaLink);
    
  }

}
