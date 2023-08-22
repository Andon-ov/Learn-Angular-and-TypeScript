import { Injectable } from '@angular/core';
import { Article } from '../article.model';
import { data } from './seed';

@Injectable({
  providedIn: 'root',
})
export class ArticleDataService {
  getData(): Article[] {
    let articles: Article[] = [];

    for (let i = 0; i < data.length; i++) {
      articles[i] = new Article(
        data[i].title,
        data[i].description,
        data[i].author,
        data[i].imageUrl
      );
    }
    return articles;
  }
}
