import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  @Input() articles!: Article[];
  private symbols: number = 250;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageBtnTitle = 'Show More';

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore(description: string) {
    this.articleDescLen += this.symbols;
    this.descToShow = description.substring(0, this.articleDescLen);

    if (this.articleDescLen >= description.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    }
  }
  toggleImage() {
    this.imageIsShown = !this.imageIsShown;
    console.log(this.imageIsShown);

    this.imageBtnTitle =
      this.imageBtnTitle === 'Show Image' ? 'Hide Image' : 'Show Image';
  }

  hideDesc() {
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
}
