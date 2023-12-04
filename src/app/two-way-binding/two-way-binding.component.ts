import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent 
{
  email:string = "shivani@gmail.com"
  password : string = "shivani@17"
  
  getEmail()
  {
    console.log(this.email)
  }
  getPassword(){
    console.log(this.password)
  }
}
