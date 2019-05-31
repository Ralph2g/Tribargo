import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GLOBAL } from './Global'

@Injectable({
  providedIn: 'root'
})
export class BaresApiService {
  public url:string;
  constructor(
    private _http:HttpClient,
  ) { 
    this.url = GLOBAL.Url;
  }
  public getLugares(){
    return this._http.get(this.url + '/lugares').toPromise();
  }
  
  getData(){
    return this._http.get(this.url + '/bar').toPromise()
  }

  getBar(id){
    return this._http.get(this.url + '/bar/' + id).toPromise()
  }

}
