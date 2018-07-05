import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Injectable()
export class ProductProvider {

  postproductUrl = 'http://192.168.13.154/api/insert_product.php';

  catalogUrl = 'http://192.168.13.154/api/get_product.php';

  catalogtypeUrl = 'http://192.168.13.154/api/get_product_detail.php';

  detailproductUrl = 'http://192.168.13.154/api/get_product_detail_2.php';

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
  }

  postproduct(myForm: any):Observable<any>{
    console.log(myForm)
    const myheader = {'Content-Type' : 'application/json'};
    return this.http.post<any>(this.postproductUrl,myForm, {headers: myheader});

  }

  getcatalog(): Observable<any[]>{
    return this.http.get<any[]>(this.catalogUrl);
  }


  getcatalogtype(category: string): Observable<any[]>{
    const myParam = {
      'category': category.toString()
    }
    return this.http.get<any[]>(this.catalogtypeUrl, {params: myParam});
  }

  getdetailproduct(id: number): Observable<any[]>{
    const myParam ={
      'id': id.toString()
    }
    return this.http.get<any[]>(this.detailproductUrl, {params: myParam});
  }














}
