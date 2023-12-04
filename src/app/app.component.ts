import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'style-binding';
  inlineColor:boolean = true;
  incolor = 'red'

  fontWeight:boolean = true

}
