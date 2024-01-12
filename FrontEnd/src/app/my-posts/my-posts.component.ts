import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../Dialogs/confirm-delete/confirm-delete.component';
import { EditTweetComponent } from '../Dialogs/edit-tweet/edit-tweet.component';

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

  constructor(private TweetService:TweetService,private authService:AuthService
    , private dialog:MatDialog){}

  ngOnInit(): void {
    console.log("hi i'm in myposts")
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




  


  changeVariableUpdate(id:any){
    this.update=true;
  }
  

  openDialogDelete(idTweet:any) {
    
      const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
        width: '250px',
        data : {idTweet:idTweet}
      })
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed with result:', result);
        this.getUserPosts()
      });
  
      
    }

    openDialogEdit(Tweet:any) {
      const dialogRef = this.dialog.open(EditTweetComponent, {
        width: '500px',
        data : {Tweet: Tweet}
      })
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed with result:', result);
        this.getUserPosts()
      });
    }
  }


