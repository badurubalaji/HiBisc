import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
login(){
  console.log(this.username);
  
}
  constructor() {
   

   }

  ngOnInit() {
  }

}
