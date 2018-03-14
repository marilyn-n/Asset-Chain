import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { AuthLoginComponent } from '../auth-login/auth-login.component';
import { AuthSignupComponent } from '../auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from '../my-private-page/my-private-page.component';
import { TestamentComponent } from '../testament/testament.component';
import { AssetComponent } from '../asset/asset.component';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'login' , component: AuthLoginComponent},
    {path: 'signup' , component: AuthSignupComponent},
    {path: 'private', component: MyPrivatePageComponent},
    {path: 'add-document', component: TestamentComponent},
    {path: 'assets&benefitiaries', component: AssetComponent},
    {path: 'payment-method', component: PaymentMethodComponent}
];
