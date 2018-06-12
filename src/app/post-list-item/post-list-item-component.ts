import { Component, Input } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.html',
  styleUrls: ['./post-list-item-component.scss']
})
export class PostListItemComponent {

  @Input() postTitle;
  @Input() postContent;
  @Input() postLoveIts;
  @Input() postCreatedAt;
  @Input() index;


  // On injecte le service de gestion des posts pour avoir accès à ses méthodes
  constructor(private postService: PostService) { }

  // On fait faire la maj des loveIts par le service de gestion des posts
  onSetLoveIts(inc) {
    this.postService.setLoveIts(this.index, inc);
  }

  // On fait faire la suppression par le service de gestion des posts
  onDelete() {
    this.postService.deletePost(this.index);
  }
}
