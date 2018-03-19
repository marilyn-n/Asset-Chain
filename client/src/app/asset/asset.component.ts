import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AssetService } from '../services/asset.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  @Input() card;
  @Output() refreshPage = new EventEmitter<any>();
  uploader: FileUploader = new FileUploader({
  });

assets = [];
testamentID;
constructor(private assetS: AssetService, private route: Router, private activateRouter: ActivatedRoute) { }

ngOnInit() {
  this.activateRouter.params.subscribe(params => {
    this.testamentID = params['idTestament'];
    this.uploader.options.url = `http://localhost:3000/api/asset/createAsset/${this.testamentID}`;
  });
  this.getAssets();
}
getAssets() {
  this.assetS.getAllAsset()
  .subscribe(assets => {
    this.assets = assets;
    console.log(this.assets);
  });
}

submitForm(myForm) {
 console.log(myForm.value);
 this.uploader.onBuildItemForm = (item, form) => {
   form.append('assetName', myForm.value.assetName);
   form.append('beneficiaryName', myForm.value.beneficiaryName);
   form.append('beneficiaryEmail', myForm.value.beneficiaryEmail);
   form.append('description', myForm.value.description);
 };
 console.log(this.uploader);
 this.uploader.uploadAll();
 this.uploader.onCompleteItem = (fileItem, response, status, headers) => {
   this.getAssets();
};
}

nextStep() {
 this.route.navigate(['/payment-method']);
}

deleteCard() {
  if(!confirm('estas seguro?')) return;
  this.assetS.removeItem(this.card)
  .subscribe(card => {
    this.refreshPage.emit();
  });
}

}

