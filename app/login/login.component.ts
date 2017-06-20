import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  error_value='';
  password='';
  error='error';
login(){
  if(this.username.length<1)
  {
    
  this.error_value='UserName must not be empty';
  return;
}
if(this.password.length<1)
  {
  this.error_value='Password must not be empty';
  return;
}
this.error_value='';
  console.log(this.username);
  
}
forgot(){
  console.log("forgot password");
  
}
  constructor() {
   

   }

  ngOnInit() {
  }

}
