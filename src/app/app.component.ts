import { Component } from '@angular/core';
import { BusComponent } from './bus/bus.component';
import { BookBusService } from './book/bookbus.service';
import { LoginService } from './login/login.service';
//import { BusService } from './bus/bus.service';

export class Product {
  prdName: String;
  prdId: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookMyBus';
  user: any = {};
  product = new Product();
 // isUserLogged : boolean = 
  constructor(private busComp: BusComponent, private bookSvc: BookBusService,private loginSvc : LoginService) {

  }
  showResults(formData) {
    console.log('form data : ' + JSON.stringify(formData.prdId))

    this.product.prdId = formData.prdId;
    this.product.prdName = formData.prdName;

    console.log('new pd', this.product)
  }
  showSmartSearch() {
    console.log('here')
    this.busComp.showSmartSearch();
  }
  
  isUserLogged() {
    if(this.bookSvc.getUserLoggedStatus()){
      this.user = this.loginSvc.getLoggedUser()
     // console.log("assinged user: "+this.user+" "+this.user.firstName);
    }
    return this.bookSvc.getUserLoggedStatus();  
  }

}
