import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class TestamentService {
  base_URL = environment.baseURL;
  options= { withCredentials: true};
  constructor(private http: Http) { }
  handleError(e) {
    return Observable.throw(e.json().message);
  }
  
  getTestament() {
    return this.http.get(`${this.base_URL}/api/testament/testament-details`, this.options)
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
      .catch(err => this.handleError(err));  }

}

