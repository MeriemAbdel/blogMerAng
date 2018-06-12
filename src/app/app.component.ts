import { Component, OnInit } from '@angular/core';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  // On inject PostService, le service de gestion des posts
  constructor( private postService: PostService) {}

  ngOnInit() {

  }
}
