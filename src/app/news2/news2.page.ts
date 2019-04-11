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

  searchChanged(){   
   this.newsService.searchData(this.type)
    .subscribe(data => {
      //console.log(data);
      this.data = data;
  })
}
}
