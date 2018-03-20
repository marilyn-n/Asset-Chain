import { Component, OnInit } from '@angular/core';
import { TestamentService } from '../services/testament.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testament-details',
  templateUrl: './testament-details.component.html',
  styleUrls: ['./testament-details.component.css']
})
export class TestamentDetailsComponent implements OnInit {
  constructor(private testamentS: TestamentService, private router: Router) { }

  ngOnInit() {
  }

  getTestament(){
    this.testamentS.getAllTestament()
    //
    //
  }




}
