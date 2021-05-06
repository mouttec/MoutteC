import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { ListBookingViewComponent } from './list-booking-view/list-booking-view.component';
import { ListBookingComponent } from './list-booking-view/list-booking/list-booking.component';
import { SingleBookingComponent } from './list-booking-view/single-booking/single-booking.component';
import { MyProfilComponent } from './my-profil/my-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    ListBookingViewComponent,
    ListBookingComponent,
    SingleBookingComponent,
    MyProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
