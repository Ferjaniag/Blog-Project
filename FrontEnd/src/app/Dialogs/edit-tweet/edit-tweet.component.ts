import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-edit-tweet',
  templateUrl: './edit-tweet.component.html',
  styleUrls: ['./edit-tweet.component.css']
})
export class EditTweetComponent {


  constructor(private TweetService: TweetService,@Inject(MAT_DIALOG_DATA) public data: any){
    console.log('Data received in dialog:', this.data);
    console.log('Data received in dialog tweet:', this.data.Tweet.tweetContent);
   
  }

  updateTweet() {

  }

}
