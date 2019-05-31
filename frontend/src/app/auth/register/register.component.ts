import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(form):void{
    this.authService.register(form.value).subscribe( res =>{
      this.router.navigateByUrl('/login');

    },
    error =>{
      console.log(error);
      
    }
    );
  }
}
