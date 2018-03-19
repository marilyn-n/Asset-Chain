import { Component, OnInit } from '@angular/core';
import { AssetService } from '../services/asset.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
  });

  testamentID;
  constructor(private assetS: AssetService, private route: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.testamentID = params['idTestament'];
      this.uploader.options.url = `http://localhost:3000/api/asset/createAsset/${this.testamentID}`;
    });
  }

submitForm(myForm){
  this.uploader.onBuildItemForm = (item, form) => {
    form.append('assetName', myForm.value.assetName);
    form.append('beneficiaryName', myForm.value.beneficiaryName);
    form.append('beneficiaryEmail', myForm.value.beneficiaryEmail);
    form.append('description', myForm.value.description);
  };
  console.log(this.uploader)
  this.uploader.uploadAll();
  this.uploader.onCompleteItem = () => this.route.navigate(['/']);

}

}
