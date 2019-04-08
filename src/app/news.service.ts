import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

//import { Observable} from 'rxjs';
//import { map } from 'rxjs/operators';

const API_URL = environment.apiURL;
const API_KEY = environment.apiKey;

export enum NewsType {
  all = '',
  bbc = 'bbc.co.uk',
  nytimes = 'nytimes.com'
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;

  constructor(private http: HttpClient) {}

  getData(url) {
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
  /*
  https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=a807f77d6c3644548b1b3c7b83210716
  https://newsapi.org/v2/top-headlines?country=us&apiKey=a807f77d6c3644548b1b3c7b83210716*/
  
  searchData(type) {
    console.log(type); 
    if (type==''){
      console.log(type)
      return this.http.get(`${API_URL}/everything?domains=nytimes.com,bbc.co.uk&apikey=${API_KEY}`);
    }
    
    if (type=='bbc'){
      return this.http.get(`${API_URL}/everything?domains=bbc.co.uk&apikey=${API_KEY}`);
    } 
    if(type=='nytimes'){
      console.log(type)
      return this.http.get(`${API_URL}/everything?domains=nytimes.com&apikey=${API_KEY}`);
    }
  }
}
