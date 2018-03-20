import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';

@Injectable()
export class TestamentService {
  base_URL= 'http://localhost:3000';
  options= { withCredentials: true};
  constructor(private http: Http) { }
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  addTestament(myForm) {
    return this.http.post(`${this.base_URL}/api/testament-details`, myForm, this.options)
      .map(res => res.json())
      .catch(err => this.handleError(err));
  }

  getAllTestament() {
    return this.http.get(`${this.base_URL}/api/testament/`)
      .map(res => res.json());
  }

  postNewTestament(testament): Observable<any> {
    return this.http.post(`${this.base_URL}/api/testament/new`, testament, this.options)
      .map(res =>res.json())
      // .map(testament=>{
      //   const user = JSON.parse(localStorage.getItem('user'));
      //   user['testament'] = testament._id;
      //   this.http.patch(`${this.base_URL}/api/update/user`, user, this.options)
      //   .map(u=>{
      //     console.log(u);
      //   })
      // })
      .catch(err => this.handleError(err));  }

}

