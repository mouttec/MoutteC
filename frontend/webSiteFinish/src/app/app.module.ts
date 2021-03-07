import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { ExplanationComponent } from './index/explanation/explanation.component';
import { ChoiceFormulaComponent } from './index/choice-formula/choice-formula.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { TechnicalControlComponent } from './technical-control/technical-control.component';
import { ExplanationTechnicalControlComponent } from './technical-control/explanation-technical-control/explanation-technical-control.component';
import { FormTechnicalContromComponent } from './technical-control/form-technical-controm/form-technical-controm.component';
import { AuthComponent } from './auth/auth.component';
import { SingninComponent } from './auth/singnin/singnin.component';
import { SingnupComponent } from './auth/singnup/singnup.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './car/add-car/add-car.component';
import { ListCarComponent } from './car/list-car/list-car.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SelectPartnerComponent } from './select-partner/select-partner.component';
import { ListPartnerComponent } from './select-partner/list-partner/list-partner.component';
import { TwoReturnServiceComponent } from './two-return-service/two-return-service.component';
import { ExplanationServiceComponent } from './two-return-service/explanation-service/explanation-service.component';
import { FormServiceComponent } from './two-return-service/form-service/form-service.component';
import { OnReturnServiceComponent } from './on-return-service/on-return-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    ExplanationComponent,
    ChoiceFormulaComponent,
    MyAccountComponent,
    TechnicalControlComponent,
    ExplanationTechnicalControlComponent,
    FormTechnicalContromComponent,
    AuthComponent,
    SingninComponent,
    SingnupComponent,
    CarComponent,
    AddCarComponent,
    ListCarComponent,
    OrderSummaryComponent,
    SelectPartnerComponent,
    ListPartnerComponent,
    TwoReturnServiceComponent,
    ExplanationServiceComponent,
    FormServiceComponent,
    OnReturnServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
