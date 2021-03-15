import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeammateService } from './services/teammate.service';
import { TeammateViewComponent } from './teammate-view/teammate-view.component';
import { TeammateComponent } from './teammate-view/teammate/teammate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeammateViewComponent,
    TeammateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TeammateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
