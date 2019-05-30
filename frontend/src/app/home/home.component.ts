import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public name:string;
  public token:string;


  
  constructor(
    public _authService:AuthService,
    public _router:Router
    ){
      this.getIdentity();
    }
    
      ngOnInit(){
    
    }

  //Revisa si tenemos un token de lo contrario nos manda al login
  public getIdentity():void{
    this.token = this._authService.getToken();
    if(!this.token){
      this._router.navigate(['/login'])
    }
  }

}
