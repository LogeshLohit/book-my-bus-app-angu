import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { BusService } from '../bus/bus.service';
import { BookBusService } from './bookbus.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookedBus: any = {};
  ticketCount: number = 1;
  constructor(private bus: BusService, private bookBusSvc: BookBusService,private router : Router, private route : ActivatedRoute) {
    this.bookedBus = bookBusSvc.getBookedBus();
    //console.log('booked bus : ' + JSON.stringify(bookBusSvc.getBookedBus()))
  }

  ngOnInit() {
  }

  decrementTicCount() {
    if (this.ticketCount > 1) {
      this.ticketCount--;
    }
  }

  incrementTicCount() {
    this.ticketCount++;
  }

  getTotalAmt(fare){
    return this.ticketCount *  fare;
  }
  goBack(){
    this.router.navigateByUrl("buses");
  }
  proceedToCheckout(){
    
    this.router.navigateByUrl("checkout")
  }
}