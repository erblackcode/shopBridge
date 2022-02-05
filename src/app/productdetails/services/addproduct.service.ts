import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Productinterface } from '../interface/productinterface';
import { ProductdetailsComponent } from '../productdetails.component';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  constructor(private http: HttpClient) { }

  private productApiURL = environment.apiURL;

  addProduct(data: Productinterface): Observable<Productinterface>{
    return this.http.post<Productinterface>(this.productApiURL+'/ProductList/',data);
  }

  getProduct(): Observable<Productinterface[]>{
    return this.http.get<Productinterface[]>(this.productApiURL+'/ProductList/');
  }

  putProduct(data:ProductdetailsComponent, id:number) {
    return this.http.put<ProductdetailsComponent>(this.productApiURL+'/ProductList/'+id, data);
  }

  deleteProduct(id:number){
    return this.http.delete<ProductdetailsComponent>(this.productApiURL+'/ProductList/'+id);
  }

}
