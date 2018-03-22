import { Component, ViewContainerRef } from '@angular/core';
// import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './services/session.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(
    private sessionS: SessionService,
    private router: Router,
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ){
     this.toastr.setRootViewContainerRef(vcr);
   }

  logout() {
    this.sessionS.logout()
      .subscribe(() => this.router.navigate( [ '/' ] ));
  }

}
