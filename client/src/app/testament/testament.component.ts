import { Component, OnInit } from '@angular/core';
import { TestamentService } from '../services/testament.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-testament',
  templateUrl: './testament.component.html',
  styleUrls: ['./testament.component.css']
})
export class TestamentComponent implements OnInit {
  constructor(private testamentS: TestamentService, private router: Router) { }
  ngOnInit() {
  }
  user;

  submitForm(newForm) {
    //console.log(newForm.value);
    //this.user = JSON.parse(localStorage.getItem('user'));
    //newForm.value['owner'] = this.user._id
    //console.log(newForm);

   this.testamentS.postNewTestament(newForm.value)
    .subscribe( testamentCreated =>{
      localStorage.setItem('testament', JSON.stringify(testamentCreated));
      //console.log(testamentCreated);
      this.router.navigate(['/assets/benefitiaries', testamentCreated._id])
    });
  }

}
