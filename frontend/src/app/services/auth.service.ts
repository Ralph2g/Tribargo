import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  public PUERTO:number = 3001;
  AUTH_SERVER:string = `http://localhost:${this.PUERTO}/api`;
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor( private httpClient: HttpClient) { }

  register( usuario:UserI ):Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`, usuario).pipe(
      tap( (res: JwtResponseI) => {
        if(res){
          // Guardar Token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      })
    );
  }// cierra metodo register

  login( usuario:UserI ):Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`, usuario).pipe(
      tap( (res: JwtResponseI) => {
        if(res){
          // Guardar Token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      })
    );
  }// cierra metodo login

  logout():void {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
  }// cierra logout

  private saveToken( token_: string, expiresIn_: string):void{
    localStorage.setItem('ACCESS_TOKEN', token_);
    localStorage.setItem('EXPIRES_IN', expiresIn_);
    this.token = token_;
  }// cierra saveToken

  public getToken():string{
      this.token = localStorage.getItem('ACCESS_TOKEN');
    return this.token;
  }
  //envio de la cadena 
  public sendString (cadena){
    return this.httpClient.post(this.AUTH_SERVER+'modelo',cadena);    
}

  


}
