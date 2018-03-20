import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/signup`
  });
  constructor(private sessionS: SessionService, private router : Router) { }

  ngOnInit() {
  }
  sendSignupForm(myForm){
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('username', myForm.value.username);
      form.append('lastName', myForm.value.lastName);
      form.append('email', myForm.value.email);
      form.append('password', myForm.value.password);
    };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (res, user) => {
      //console.log("te registre y devolvi esto: ",user) //user viene en forma de texto
      const u = JSON.parse(user);
      //console.log(u);
      localStorage.setItem('user', user);
      this.router.navigate(['private']);
    }
  }
}
