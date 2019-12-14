import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { BusComponent } from './bus/bus.component';
import { AdminComponent } from './admin/admin/admin.component';
import { BookComponent } from './book/book.component';
import { SigninComponent } from './signin/signin.component';
import { BookGuard } from './book/BookGuard';
import { TictocComponent } from './tictoc/tictoc.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "buses", component: BusComponent },
  { path: "admin", loadChildren: "./admin/admin.module#AdminModule" },
  { path: "book", component: BookComponent, canActivate: [BookGuard] },
  { path: "signin", component: SigninComponent },
  { path: "tictoc", component: TictocComponent },
  { path: "checkout", component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
