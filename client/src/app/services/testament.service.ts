import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';

@Injectable()
export class TestamentService {
  base_URL= 'http://localhost:3000/api';
  options= { withCredentials: true};
  constructor(private http: Http) { }
  handleError(e) {
    return Observable.throw(e.json().message);
  }

}

