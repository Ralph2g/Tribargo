import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'bar-login',
  templateUrl: './Login_Bar.component.html',
})
export class BarLoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form):void{
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/home');
    },
    error =>{
      console.log(error);
      
    }
    )}

}
