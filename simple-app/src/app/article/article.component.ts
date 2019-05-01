/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Component, Input, OnInit, Output} from '@angular/core';
import {Article} from '../DB/Article';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  article: Article;
  @Output()
  deletedArticle: EventEmitter<Article> = new EventEmitter();
  constructor() {}

  public getTitle(): string {
    return this.article.title;
  }

  public getContent(): string {
    return this.article.content;
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
