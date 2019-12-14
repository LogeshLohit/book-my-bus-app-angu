import { Injectable } from "../../../node_modules/@angular/core";

@Injectable({ providedIn: 'root' })
export class BookBusService {
    bookedBus: any;
    isUserLogged: boolean = false;
    setBookedBus(bus: any) {
     //   console.log('before setting : ' + this.bookedBus)
        this.bookedBus = bus;
     //   console.log('after setting : ' + JSON.stringify(this.bookedBus))
    }
    getBookedBus() {
      //  console.log('before getting : ' + JSON.stringify(this.bookedBus))
        return this.bookedBus;
    }
    setUserLoggedStatus(status: boolean) {
      //  console.log('before user logged : ' + this.isUserLogged)
        this.isUserLogged = status;
      //  console.log('after setting : ' + this.isUserLogged)
    }
    getUserLoggedStatus() {
       // console.log('getting user logged status : ' + this.isUserLogged)
        return this.isUserLogged;
    }
}