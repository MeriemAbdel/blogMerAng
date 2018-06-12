import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()

export class PostService {

  postsSubject = new Subject<any[]>();

  private posts = [
    {
      title: 'Mon premier post',
      content : 'Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d ennuis te seront épargnés.',
      loveIts : 0,
      createdAt : new Date()
    },
    {
      title: 'Mon deuxième post',
      content : 'On passe une moitié de sa vie à attendre ceux qu on aimera et l autre moitié à quitter ceux qu on aime.',
      loveIts : -3,
      createdAt : new Date()
    },
    {
      title: 'Encore un post',
      content: 'Le monde est dangereux à vivre ! Non pas tant à cause de ceux qui font le mal, mais à cause de ceux qui regardent et laissent faire.',
      loveIts: 1,
      createdAt: new Date()
    }
  ];
  
  // Fonction d'émission du sujet
  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  // Mise à jour du compteur de loveIt
  setLoveIts(i: number, inc: number) {

    // mise à jour du compteur
    this.posts[i].loveIts += inc;

    // On emet le sujet
    this.emitPostSubject();
  }

  // Ajout d'un post
  addPost(title: string, content: string) {
    // A la création loveIts = 0
    // La date de création est la date courante
    const postObject = {
      title: '',
      content: '',
      loveIts: 0,
      createdAt: new Date()
    };

    postObject.title = title;
    postObject.content = content;

    // Ajout de l'objet à la fin du tableau
    this.posts.push(postObject);

    // On emet le sujet
    this.emitPostSubject();
  }

  // Suppression d'un post
  deletePost(i: number) {

    // On supprime le post à partir de son index
    this.posts.splice(i, 1);

    // On emet le sujet
    this.emitPostSubject();
  }
}
