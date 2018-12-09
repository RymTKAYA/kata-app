import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app.routes';
import { AppComponent } from './app.component';
import { ListCurrencyComponent } from './list-currency/list-currency.component';
import { DetailCurrencyComponent } from './detail-currency/detail-currency.component';
import {SharedModule} from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCurrencyComponent,
    DetailCurrencyComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRouting,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
