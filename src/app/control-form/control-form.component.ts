import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-form',
  templateUrl: './control-form.component.html',
  styleUrls: ['./control-form.component.css']
})
export class ControlFormComponent implements OnInit {
  contactMethods=[
    {id:1, name:'phone'},
    {id:2, name:'mail'}
  ];
  contactMeth=[
    {id:1, name:'phone'},
    {id:2, name:'mail'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  submit(f){
    console.log(f.value);
  }
}
