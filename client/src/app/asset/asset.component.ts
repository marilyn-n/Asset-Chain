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

  assets=[];
  testamentID;
  constructor(private assetS: AssetService, private route: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.testamentID = params['idTestament'];
      this.uploader.options.url = `http://localhost:3000/api/asset/createAsset/${this.testamentID}`;
    });

    this.getAssets();
  }

  getAssets(){
    this.assetS.getAllAsset()
    .subscribe(assets=>{
      this.assets = assets;
      console.log(this.assets);
    });
  }

submitForm(myForm) {
  console.log(myForm.value);
  this.assetS.postNewAsset(myForm.value);
  this.uploader.onBuildItemForm = (item, form) => {
    form.append('assetName', myForm.value.assetName);
    form.append('beneficiaryName', myForm.value.beneficiaryName);
    form.append('beneficiaryEmail', myForm.value.beneficiaryEmail);
    form.append('description', myForm.value.description);
  };
  console.log(this.uploader);
  this.uploader.uploadAll();
  this.uploader.onCompleteItem;
  this.getAssets();

  //despues de guardar en el backend llamamos de 
  //nuevo a todos los assets para que se vuelvan a dibujar
  //esto lo hcemos con this.getAssets()

}


// submitForm(newForm) {
//   console.log(newForm.value);
//  this.testamentS.postNewTestament(newForm.value)
//   .subscribe( testamentCreated => this.router.navigate(['/assets/benefitiaries', testamentCreated._id]));
// }


nextStep() {
 this.route.navigate(['/payment-method']);
}

}

// = () => this.route.navigate(['/payment-method'])