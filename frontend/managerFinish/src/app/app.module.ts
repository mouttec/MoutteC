import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ManagerService } from './services/manager.service';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { ManagerComponent } from './manager-view/manager/manager.component';
import { ManagerFormsComponent } from './manager-view/manager-forms/manager-forms.component';
import { SingleManagerComponent } from './manager-view/single-manager/single-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManagerViewComponent,
    ManagerComponent,
    ManagerFormsComponent,
    SingleManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
