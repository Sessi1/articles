import {Component, Input, OnInit, Output} from '@angular/core';
import {Article} from '../DB/Article';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  /*@Input('title')
  title: string;
  @Input('content')
  content: string;
  @Input('author')
  author: string;*/
  @Input()
  article: Article;

  @Output()
  deletedArticle: EventEmitter<Article> = new EventEmitter();
  constructor() {
    //this.author = 'Sessi B.';
  }
  public displayeAuthor(): string {
    return `Writen by ${this.article.author}`;
  }
  public delete(): void {
      this.deletedArticle.emit(this.article);
  }
  ngOnInit() {
  }

}
