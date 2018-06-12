import {Component, OnDestroy, OnInit} from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.html',
  styleUrls: ['./post-list-component.scss']
})

// Composant pour la gestion de la liste
export class PostListComponent implements OnInit {

  posts: any[];
  postSubscription: Subscription;

  // On injecte le service de gestion des posts
  constructor( private postService: PostService ) { }

  ngOnInit() {
    // On souscrit au sujet émis par le service de gestion des posts
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    // On n'oublie pas de 'désouscrire' ;-)
    this.postSubscription.unsubscribe();
  }

}
