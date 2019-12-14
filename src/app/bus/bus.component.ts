import { Component, OnInit } from '@angular/core';
import { BusService } from './bus.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { BookComponent } from '../book/book.component';
import { BookBusService } from '../book/bookbus.service';
@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  selectedFromCity: string = "";
  selectedToCity: string = "";
  cities: string[] = [];
  fromCities: string[] = [];
  toCities: string[] = [];
  BUSES: any[] = [];
  buses: any[] = [];
  toggleSmartSearch: boolean = false;
  constructor(private busService: BusService, private route: ActivatedRoute,
    private router: Router, private bookBusSvc: BookBusService) {
    busService.getAllBuses().subscribe((BUSES) => {
      this.BUSES = BUSES;
      this.buses = this.BUSES;
      console.log('Buses found : ' + this.buses.length)
    })
    busService.getAllCities().subscribe((CITIES) => {
      this.cities = CITIES.map(c => c.name.toLocaleLowerCase()).sort();
      this.fromCities = this.cities;
      this.toCities = this.cities;
      console.log('total cities found length:' + this.cities.length)
    })
  }

  getAllBuses() {
    return this.buses = this.BUSES;
  }

  getSelectedFromCity(city: string) {
    console.log('selected from city : ' + city)
    this.selectedFromCity = city.toLocaleLowerCase();
    if (this.selectedToCity !== "" && this.selectedToCity != null && this.selectedToCity != undefined) {
      this.BUSES.filter((bus) => console.log(bus.toCity.toLocaleLowerCase() +"*"+this.selectedToCity.toLocaleLowerCase() +"*"+bus.fromCity.toLocaleLowerCase() +"**"+this.selectedFromCity.toLocaleLowerCase()))
      console.log(this.buses.length)
      this.buses = this.BUSES.filter((bus) => bus.toCity.toLocaleLowerCase() === this.selectedToCity.toLocaleLowerCase() && bus.fromCity.toLocaleLowerCase() === this.selectedFromCity.toLocaleLowerCase())
      console.log(this.buses.length)
    } else if (this.selectedFromCity !== "" && this.selectedFromCity != null && this.selectedFromCity != undefined) {
      //check whether it's coming here when we didn't select to city
      console.log(this.BUSES.forEach((bus) => console.log(bus.fromCity.toLocaleLowerCase() +"*"+ city.toLocaleLowerCase())));
      this.buses = this.BUSES.filter((bus) => bus.fromCity.toLocaleLowerCase() === city.toLocaleLowerCase());
      console.log(this.buses.length)
    }
    //else this.buses = this.BUSES;
    //update to city list
    this.toCities = this.cities.filter((city) => city != this.selectedFromCity.toLocaleLowerCase());
  }
  getSelectedToCity(city: string) {
    // let tempBusList  = this.buses;
    //console.log(tempBusList.length)
    //console.log('seleted to city : ' + city)
    this.getSelectedFromCity(this.selectedFromCity.toLocaleLowerCase());
    if (this.selectedToCity !== "" && this.selectedToCity != null && this.selectedToCity != undefined) {
      console.log("before entering to filter: "+this.buses.length)
      this.buses = this.buses.filter((bus) => bus.toCity.toLocaleLowerCase() == city.toLocaleLowerCase())
      console.log("after entering to filter: "+this.buses.length)
    }
    else this.buses = this.buses;

    this.fromCities = this.cities.filter((city) => city.toLocaleLowerCase() != this.selectedToCity.toLocaleLowerCase());
  }

  handleBook(busId) {
    //   if (this.isUserLoggedIn)
    this.bookBusSvc.setBookedBus(this.buses.find((bus) => bus._id === busId));

    this.router.navigate(['book'])

    //   else
    //   this.router.navigateByUrl('login')

    console.log("user not signed in")
    //this.bookBusSvc.getBookedBus();
    console.log('route ' + busId)
  }

  showSmartSearch() {
    this.toggleSmartSearch = !this.toggleSmartSearch;
  }

  ngOnInit() {
  }

}

