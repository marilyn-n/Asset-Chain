import { Injectable, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';

@Injectable()
export class AssetService {
  base_URL= 'http://localhost:3000/';
  options= { withCredentials: true};
  // @Output() removeAsset = new EventEmitter<any>();
  constructor(private http: Http) { }
  handleError(e) {
    return Observable.throw(e.json().message);
  }
  addAsset(myForm) {
    return this.http.post(`${this.base_URL}/asset/benefitiarie`, myForm, this.options)
      .map(res => res.json())
      .catch(err => this.handleError(err));
  }


  // addAsset(myForm):Observable<any>{
  //   return this.http.post('/api/cards', myForm)
  //   .map((res:Response)=>res.json())
  //   .map(function(myForm){
  //     return myForm;
  //   })
  //   .catch(e=>{
  //     console.log(e);
  //     return Observable.throw(e);
  //   })
  // }



  getAllAsset() {
    return this.http.get('http://localhost:3000/api/asset/')
      .map(res => res.json())
      .catch(err => this.handleError(err));  
  }

  postNewAsset(asset): Observable<any> {
    return this.http.post('http://localhost:3000/api/asset/new', asset, this.options)
      .map(res => res.json())
      .catch(err => this.handleError(err));  }


}
