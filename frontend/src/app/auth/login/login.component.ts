import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  onLogin(form):void{
    this._authService.login(form.value).subscribe(
      response => { 
      this._router.navigateByUrl('/');
    },
    error =>{
      console.log(error);
    });
  }

}
