import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private sessionS: SessionService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    console.log('entro');
    this.sessionS.logout()
      .subscribe(() => this.router.navigate( [ '/' ] ));
  }
}
