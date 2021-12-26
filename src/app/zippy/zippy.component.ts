import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {
isExpanded: boolean=false;

onClick(){
  this.isExpanded=!this.isExpanded;
}
}
