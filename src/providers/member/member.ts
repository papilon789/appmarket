import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class MemberProvider {

  registerUrl = 'http://192.168.13.154/api/insert_register.php';

  constructor(public http: HttpClient) {
    console.log('Hello MemberProvider Provider');
  }


  register(signupform: any):Observable<any>{
    const myheader = {'Content-Type' : 'application/json'};
    return this.http.post<any>(this.registerUrl,signupform, {headers: myheader});

  }

  login(tel: string, password: string){

  }







}
