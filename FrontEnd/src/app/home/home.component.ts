import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  tags: string[] = [];
  tweets : any = [] ; 
  fullNameUser =' '

  fullNameUserPost=''
  
  tweetContent: string = '';
userConnected = ''
  newTweet = {
    userID:'',
    tweetContent:'',
    tags: ['']
  }

 

  constructor(private tweetService:TweetService,private router:Router, private authService:AuthService ){}

  ngOnInit(): void {
  this.getAllTweets();

 this.userConnected= this.authService.getUserDataFromToken() ;
 console.log("User connected : ",this.userConnected)
 this.newTweet.userID = (this.userConnected as any) ._id ; 

 this.fullNameUser=(this.userConnected as any).firstName+' '+(this.userConnected as any).lastName

  }

  extractTags() {
      // Extract hashtags from the tweetContent
  const hashtagRegex = /#(\w+)/g;
  const matches = this.tweetContent.match(hashtagRegex);

  // Update the tags array
  this.tags = matches ? matches.map(match => match.substring(1)) : [];
  }

  addTweet() {
// Delete tags from tweet content
    this.tags.forEach(tag => {
      this.tweetContent = this.tweetContent.replace(`#${tag}`, '');
    });

    
    console.log('Tweet Content:', this.tweetContent);
    this.newTweet.tweetContent=this.tweetContent;
    this.newTweet.tags=this.tags;
    console.log('Tags:', this.tags);
    this.tweetService.createTweet(this.newTweet).subscribe(res=> {
      console.log('Tweet Added successfully ')
      this.getAllTweets()
      this.tweetContent=''
    },error => {
      console.log('Error creating tweet !',error)
    })
    
   

  
  }

  getUserById(id:any) : any{
this.authService.getUserByID(id).subscribe(response=> {
console.log("User data",response)
return (response as any).message ;
},error => {

})
  }

  getAllTweets() {

    this.tweetService.getAllTweets().subscribe(response => {
      console.log('Tweets:', (response as any).Tweets);
      this.tweets= (response as any).Tweets.reverse();
     // this.tweets=response.Tweets ;

    }, error => {
console.log('Error !!',error)
    })
   
  }


  logOut() {
    console.log("loginnn func")
   localStorage.removeItem('token') ; 

  // console.log('remove toke',localStorage.getItem('token') );
   this.router.navigate(['/'])
  }



}
