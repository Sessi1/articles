import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {OtherArticle} from "../DB/OtherArticle";
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;
  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      author : ['', Validators.required ],
    });
  }
  createArticle(): void {
    const formModel = this.articleForm.value;
    const newArticle : OtherArticle ={
      title: formModel.title,
      content: formModel.content,
      author: formModel.author
    }
    this.articleService.addArticle(newArticle).subscribe();
  }

  ngOnInit() {
  }

}
