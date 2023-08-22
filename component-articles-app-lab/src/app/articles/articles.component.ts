import { Component } from '@angular/core';
import { Article } from '../models/article.model';
import { data } from '../data/seed';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  article: Article[] = data;
}
