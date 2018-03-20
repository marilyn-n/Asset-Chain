import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';
// services
import { SessionService } from './services/session.service';
import { TestamentService } from './services/testament.service';
import { AssetService } from './services/asset.service';

// components
import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';
import { TestamentComponent } from './testament/testament.component';
import { AssetComponent } from './asset/asset.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';

// routes
import { routes } from './routes/app.routing';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { StripeFormComponent } from './stripe-form/stripe-form.component';
import { TestamentDetailsComponent } from './testament-details/testament-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    MyPrivatePageComponent,
    TestamentComponent,
    AssetComponent,
    PaymentMethodComponent,
    HomeComponent,
    NavbarComponent,
    FileSelectDirective,
    AddPhotoComponent,
    StripeFormComponent,
    TestamentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SessionService,
    TestamentService,
    AssetService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
