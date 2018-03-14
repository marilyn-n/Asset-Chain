import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  formInfo = {
    username: '',
    password: ''
  };

  constructor( private sessionS: SessionService, private route: Router) { }

  ngOnInit() {
  }

  sendForm () {
     this.sessionS.login(this.formInfo.username, this.formInfo.password)
       .subscribe(respuesta => this.route.navigate(['private']));
  }
}
