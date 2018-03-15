import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';

@Injectable()
export class TestamentService {
  base_URL= 'http://localhost:3000/';
  options= { withCredentials: true};
  constructor(private http: Http) { }
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getAllTestament() {
    return this.http.get('http://localhost:3000/api/testament/')
      .map(res => res.json());
  }

  postNewTestament(testament):Observable<any> {
    return this.http.post('http://localhost:3000/api/testament/new', testament, this.options)
      .map(res => res.json())
      .catch(err => this.handleError(err));  }

}

