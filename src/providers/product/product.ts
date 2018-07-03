import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductProvider {

  postproductUrl = "http://192.168.13.154/api/insert_product.php";

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
  }

  postproduct(myForm: any):Observable<any>{
    console.log(myForm)
    const myheader = {'Content-Type' : 'application/json'};
    return this.http.post<any>(this.postproductUrl,myForm, {headers: myheader});

  }

}
