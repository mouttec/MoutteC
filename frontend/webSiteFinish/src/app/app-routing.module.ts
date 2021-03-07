import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AddCarComponent } from './car/add-car/add-car.component';
import { CarComponent } from './car/car.component';
import { IndexComponent } from './index/index.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { OnReturnServiceComponent } from './on-return-service/on-return-service.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SelectPartnerComponent } from './select-partner/select-partner.component';
import { TechnicalControlComponent } from './technical-control/technical-control.component';
import { TwoReturnServiceComponent } from './two-return-service/two-return-service.component';

const routes: Routes = [
  {path: 'selectPartner', component: SelectPartnerComponent},
  {path: 'onReturn', component: OnReturnServiceComponent},
  {path: 'twoReturn', component: TwoReturnServiceComponent},
  {path: 'search', component: SelectPartnerComponent},
  {path: 'order', component: OrderSummaryComponent},
  {path: 'addCar', component: AddCarComponent},
  {path: 'car', component: CarComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'myAccount', component: MyAccountComponent},
  {path: 'technicalControl', component: TechnicalControlComponent},
  {path: '', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
