import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class SessionService {
  base_URL = environment.baseURL;
  options= { withCredentials: true};
  constructor(private http: Http) { }
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  login(username, password) {
    return this.http.post(`${this.base_URL}/api/login`, {username,password}, this.options)
      .map(res => res.json())
      .catch(err => this.handleError(err) );
  }

  signup(formSignup) {
    return this.http.post(`${this.base_URL}/api/signup`, formSignup, this.options)
      .map(res => res.json())
      .catch(err => this.handleError(err));
  }

  loggedIn() {
    return this.http.get(`${this.base_URL}/api/loggedin`, this.options)
      .map(res => res.json())
      .catch(err => this.handleError(err));
  }

  logout() {
    return this.http.post(`${this.base_URL}/api/logout`, {} , this.options)
      .map(res => res.json())
      .catch(err => this.handleError(err) );
  }

}
