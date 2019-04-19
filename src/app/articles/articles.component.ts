import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../DB/Article';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  allArticles: Article[];
  constructor(private articleService: ArticleService) {
    this.allArticles = [];
  }

  deleteArticle(article: Article) {
    /*const idToDelete = article.id;
    let pos = -1;
    this.articleService.deleteArticle(idToDelete).subscribe(() => {
      this.allArticles.forEach((artc, index) => {
        if (artc.id === idToDelete) {
          pos = index;
        }
      });
      this.allArticles.splice(pos, 1);
    });*/
  }
  ngOnInit() {
    this.articleService.getArticles().subscribe(articles => {
        this.allArticles = articles;
    });
  }
}
