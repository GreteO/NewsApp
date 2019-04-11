import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiURL;
const API_KEY = environment.apiKey;

export enum NewsType {
  bbc = 'bbc.co.uk',
  independent = 'independent.co.uk',
  thetimes = 'thetimes.co.uk',
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
  
  searchData(type) {
    console.log(type); 
    if (type=='bbc'){
      return this.http.get(`${API_URL}/everything?domains=bbc.co.uk&apikey=${API_KEY}`);
    } 
    if(type=='independent'){
      console.log(type)
      return this.http.get(`${API_URL}/everything?domains=independent.co.uk&apikey=${API_KEY}`);
    }
    if(type=='thetimes'){
      console.log(type)
      return this.http.get(`${API_URL}/everything?domains=thetimes.co.uk&apikey=${API_KEY}`);
    }
    if(type=='nytimes'){
      console.log(type)
      return this.http.get(`${API_URL}/everything?domains=nytimes.com&apikey=${API_KEY}`);
    }
  }
}