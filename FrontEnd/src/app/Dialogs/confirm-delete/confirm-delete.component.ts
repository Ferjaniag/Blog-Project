import { Component,Inject } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent {

  idT:any =''

  constructor(private TweetService: TweetService,@Inject(MAT_DIALOG_DATA) public data: any){
    console.log('Data received in dialog:', this.data);
    this.idT=this.data.idTweet
  }


  deleteTweet() {
    this.TweetService.deleteTweet( this.idT
      ).subscribe(response => {
        console.log('Tweet Deleted:', response);
       
  
      }, error => {
  console.log('Error !!',error)
      })
  }

}
