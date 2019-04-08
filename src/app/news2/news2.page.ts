import { Component, OnInit } from '@angular/core';
import { NewsService, NewsType } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news2',
  templateUrl: 'news2.page.html',
  styleUrls: ['news2.page.scss']
})
export class News2Page implements OnInit{
  data: any;
  type: NewsType;

  constructor(private newsService: NewsService, private router: Router){}

  ngOnInit(){
    //this.newsService.getData('top-headlines?country=us&category=business')
    //this.newsService.getData('top-headlines?country=gb')
    //this.newsService.getData('everything?sources=bbc-news&from=2019-03-16&to=2019-04-06&sortBy=popularity')
   
    this.newsService.getData('everything?domains=nytimes.com')
    .subscribe(data => {
      console.log(data);
      this.data = data;
    })
    //console.log(this.newsService.getData('everything?domains=bbc.co.uk'));
  }

  onGoToNewsSinglePage(article){
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

  searchChanged(){
   console.log(this.type);
   
   this.newsService.searchData(this.type)
    .subscribe(data => {
      console.log(data);
      this.data = data;
      console.log(this.data);
  })
}
}
