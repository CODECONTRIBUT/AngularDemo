import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
@Input() isActive: boolean;
@Input() likeCount: number;

  onClick(){
    this.likeCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
