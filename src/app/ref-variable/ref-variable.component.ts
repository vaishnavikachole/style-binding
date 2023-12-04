import { Component } from '@angular/core';

@Component({
  selector: 'app-ref-variable',
  templateUrl: './ref-variable.component.html',
  styleUrls: ['./ref-variable.component.css']
})
export class RefVariableComponent 
{
  // getEmail(event:any)
  // {
  //   console.log(event.target.value)
  // }
  // getEmail(data:any)
  // {
  //   console.log(data.value)
  // }
  getEmail(data:any)
  {
    console.log(data)
  }
  


}
