import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private url="http://localhost:5002/"

  constructor(private http:HttpClient ) { }

  getAllTweets() {
    return this.http.get(this.url+'tweet/getAllTweets') ; 
    
  }


  createTweet(tweet : any) 
  {
    return this.http.post(this.url+'tweet/create',tweet) 
  }

  deleteTweet(IDtweet:any)
   {
return this.http.delete(this.url+'tweet/delete/'+IDtweet) ;
  }

  updateTweet(tweet:any) {
    return this.http.put(this.url+'tweet/updateTweet',tweet);

  }



}
