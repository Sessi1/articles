import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../DB/Article';
import {ArticleService} from '../article.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  allArticles: Article[];
  searchText:string;
  constructor(private articleService: ArticleService) {
  }
  delArticle(art: Article) {
    this.articleService.deleteArticle(art.id).subscribe(() => {
      this.articleService.getArticles().subscribe(articles  => this.allArticles = articles);
    });
    console.log('One article was deleted');
  }

  ngOnInit() {
    // this.allArticles = this.articleService.getArticles();
    this.articleService.getArticles().subscribe(art => {
      this.allArticles = art;
    } );
  }

}
