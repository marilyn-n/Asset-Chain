import { Injectable, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';

@Injectable()
export class AssetService {
  @Output() removeAsset = new EventEmitter<any>();
  constructor(private http: Http) { }




}
