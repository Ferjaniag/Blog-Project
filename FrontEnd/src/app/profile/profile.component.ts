import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data:any 
  numberOfPosts:number=0 ; 

  constructor (private AuthSerivce:AuthService, private TweetService:TweetService){}

  ngOnInit(): void {
   
    this.data=this.AuthSerivce.getUserDataFromToken() 

    console.log("data user ",this.data)
    console.log("name user ",this.data.firstName)
    this.getNumberOfPosts()

  }

  getNumberOfPosts() {
    this.TweetService.getTweetByIDUser( '6583596fafe24af08f39ce0f'//this.idUser
    ).subscribe(response => {
      console.log('Tweets:', (response as any).Tweets);
      this.numberOfPosts=(response as any).Tweets.length
      console.log("length posts",this.numberOfPosts)
     // this.tweets=response.Tweets ;

    }, error => {
console.log('Error !!',error)
    })
  }

}
