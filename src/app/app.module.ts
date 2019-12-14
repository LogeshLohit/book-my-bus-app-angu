import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusComponent } from './bus/bus.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { BookComponent } from './book/book.component';
import { SigninComponent } from './signin/signin.component';
import { BusSearchFilter } from './bus/bus.filter';
import { CheckoutComponent } from './checkout/checkout.component';
import { TictocComponent } from './tictoc/tictoc.component';

@NgModule({
  declarations: [
    AppComponent,
    BusComponent,
    LoginComponent,
    BookComponent,
    SigninComponent,
    BusSearchFilter,
    CheckoutComponent,
    TictocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AdminModule
  ],
  providers: [BusComponent,BookComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
