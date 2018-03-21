import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AssetService } from "../services/asset.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FileUploader } from "ng2-file-upload";
import {TestamentService} from '../services/testament.service';

@Component({
  selector: "app-asset",
  templateUrl: "./asset.component.html",
  styleUrls: ["./asset.component.css"]
})
export class AssetComponent implements OnInit {
  @Input() card;
  @Output() refreshPage = new EventEmitter<any>();
  uploader: FileUploader = new FileUploader({});

  assets = [];
  testamentID;
  testament;
  constructor(
    private assetS: AssetService,
    private route: Router,
    private activateRouter: ActivatedRoute,
    private testamentS: TestamentService
  ) {}

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.testamentID = params['idTestament'];
      this.uploader.options.url = `http://localhost:3000/api/asset/createAsset/${this.testamentID}`;
    });
    this.getAssets();
  }
  getAssets() {
    this.testamentS.getTestament()
    .subscribe(testament => {
      console.log(testament);
      this.testament = testament;
      this.assets = this.testament.assets;
    });
  }

  submitForm(myForm) {
    console.log(myForm.value);
    this.uploader.onBuildItemForm = (item, form) => {
      form.append("assetName", myForm.value.assetName);
      form.append("beneficiaryName", myForm.value.beneficiaryName);
      form.append("beneficiaryEmail", myForm.value.beneficiaryEmail);
      form.append("description", myForm.value.description);
    };
    console.log(this.uploader);
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (fileItem, response, status, headers) => {
      console.log(response);
      this.getAssets();
    };
  }

  nextStep() {
    this.route.navigate(['/payment-method']);
  }

  deleteCard() {
    if (!confirm("estas seguro?")) return;
    this.assetS.removeItem(this.card).subscribe(card => {
      this.refreshPage.emit();
    });
  }
}
