import { Component, OnInit } from '@angular/core';
import { AssetService } from '../services/asset.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  constructor(private assetS: AssetService, private route: Router) { }

  ngOnInit() {
  }



}
