import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.css']
})
export class PostsEditComponent implements OnInit {
  post: Post = {
    content: '',
    date: undefined,
    
  };
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }
  

}
