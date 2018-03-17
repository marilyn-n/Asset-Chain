import { Injectable, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';

@Injectable()
export class AssetService {
  @Output() removeAsset = new EventEmitter<any>();
  showEdit:boolean = false;
  asset:Array<any>; //no se que es
  constructor(private http: Http) { }


  add() {
    return this.http.get('http://localhost:3000/api/testament/new')
    .map(res => res.json());

  }
  edit() {

  }
  delete(){
    if(!confirm("estas seguro?")) return;
    this.removeAsset.emit(this.asset);
    this.showEdit = false;

  }

  showInput() {
    this.showEdit = true;
  }

  editProfile(){

  }

}
