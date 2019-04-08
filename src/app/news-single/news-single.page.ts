import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
  article;
  constructor(private newsService: NewsService, public storage: Storage) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);
  }
}
