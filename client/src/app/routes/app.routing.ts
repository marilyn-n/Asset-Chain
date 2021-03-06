import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { AuthLoginComponent } from '../auth-login/auth-login.component';
import { AuthSignupComponent } from '../auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from '../my-private-page/my-private-page.component';
import { TestamentComponent } from '../testament/testament.component';
import { AssetComponent } from '../asset/asset.component';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';
import { HomeComponent } from '../home/home.component';
import { AddPhotoComponent } from '../add-photo/add-photo.component';
import { TestamentDetailsComponent } from '../testament-details/testament-details.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '', component: HomeComponent },
    {path: 'login' , component: AuthLoginComponent},
    {path: 'signup' , component: AuthSignupComponent},
    {path: 'private', component: MyPrivatePageComponent},
    {path: 'add-document', component: TestamentComponent},
    {path: 'assets/benefitiaries/:idTestament', component: AssetComponent},
    {path: 'addPhoto', component: AddPhotoComponent},
    {path: 'payment-method', component: PaymentMethodComponent},
    {path: 'testament-details', component: TestamentDetailsComponent}
];
