import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templete-form',
  templateUrl: './templete-form.component.html',
  styleUrls: ['./templete-form.component.css']
})
export class TempleteFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(a){
    console.log(a);
  }
}
