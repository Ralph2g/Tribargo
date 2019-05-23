import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  //Atributo que manejara el token

  public token: string;

  constructor (){

    this.token = null;

  }



}
