import { Component, OnInit } from '@angular/core';
import { TestamentService } from '../services/testament.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testament-details',
  templateUrl: './testament-details.component.html',
  styleUrls: ['./testament-details.component.css']
})
export class TestamentDetailsComponent implements OnInit {
  testament: any;
  constructor(private testamentS: TestamentService, private router: Router) { }

  ngOnInit() {
    this.testamentS.getTestament()
      .subscribe(myTestament => this.testament = myTestament);
  }



}
