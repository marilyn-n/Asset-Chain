import { Component, OnInit } from '@angular/core';
import { TestamentService } from '../services/testament.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testament',
  templateUrl: './testament.component.html',
  styleUrls: ['./testament.component.css']
})
export class TestamentComponent implements OnInit {
  testamentForm = {
    owner: '',
    description: ''
  };

  constructor(private testamentS: TestamentService, private route: Router) { }

  ngOnInit() {
  }

  sendTestamentForm(testamentForm) {
    console.log('whaat');
    this.testamentS.testamento(testamentForm.owner, testamentForm.description)
      .subscribe(respuesta => this.route.navigate(['assets/benefitiaries']));
 }
}
