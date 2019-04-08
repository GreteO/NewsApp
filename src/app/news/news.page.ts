import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss']
})
export class NewsPage implements OnInit {
  data: any;
  constructor(private newsService: NewsService, private router: Router){}

  ngOnInit(){
    //this.newsService.getData('top-headlines?country=us&category=business')
    //this.newsService.getData('top-headlines?country=gb')
    //this.newsService.getData('everything?sources=bbc-news&from=2019-03-16&to=2019-04-06&sortBy=popularity')
    this.newsService.getData('everything?domains=bbc.co.uk')
    .subscribe(data => {
      console.log(data);
      this.data = data;
      
    })
  }

  onGoToNewsSinglePage(article){
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
