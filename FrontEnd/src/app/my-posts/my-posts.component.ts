import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  tweets : any = [] ; 
  fullNameUser=''
  userConnected=''
  idUser='';
  update:boolean = false
  tags: string[] = [];

  constructor(private TweetService:TweetService,private authService:AuthService){}

  ngOnInit(): void {
    this.getUserPosts();
    this.userConnected=this.authService.getUserDataFromToken(); 
    console.log('user conn ',this.userConnected)

this.idUser=(this.userConnected as any) ._id ;
console.log('id user ',this.idUser)
this.fullNameUser=(this.userConnected as any).firstName+' '+(this.userConnected as any).lastName 
  }

  getUserPosts(){
    this.TweetService.getTweetByIDUser( '6583596fafe24af08f39ce0f'//this.idUser
    ).subscribe(response => {
      console.log('Tweets:', (response as any).Tweets);
      this.tweets= (response as any).Tweets.reverse();
     // this.tweets=response.Tweets ;

    }, error => {
console.log('Error !!',error)
    })
  }


  deleteTweet(idTweet:any) {
    this.TweetService.deleteTweet( idTweet
    ).subscribe(response => {
      console.log('Tweet Deleted:', response);
      this.tweets= (response as any).Tweets.reverse();
     // this.tweets=response.Tweets ;

    }, error => {
console.log('Error !!',error)
    })
  } 

  updateTweet() {

  }


  changeVariableUpdate(){
    this.update=true;
  }
  

}
