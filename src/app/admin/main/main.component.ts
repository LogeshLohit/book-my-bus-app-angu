import { Component, OnInit ,OnChanges, SimpleChanges} from '@angular/core';
import { BusService } from 'src/app/bus/bus.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  newBus: any = {
    busRouteNo: "",
    fromCity: "",
    toCity: "",
    busDesc: "",
    busFare: 0
  }
  buses: any[] = [];
  cities: string[] = [];
  toCities: string[] = [];
  fromCities: string[] = [];
  showAddRouteTogggle: boolean = false;
  constructor(private busSvc: BusService, private router: Router, private route: ActivatedRoute) {
    busSvc.getAllBuses().subscribe((BUSES) => {
      this.buses = BUSES;
      console.log("found buses length: " + this.buses.length)
    })
    busSvc.getAllCities().subscribe((CITIES) => {
      this.cities = CITIES.map(c => c.name.toLocaleLowerCase()).sort();
      console.log('found cities length: ' + this.cities.length)
    })
  }

  ngOnInit() {
    this.busSvc.getAllBuses().subscribe((BUSES) => {
      this.buses = BUSES;
      console.log("found buses length: " + this.buses.length)
    })
    this.busSvc.getAllCities().subscribe((CITIES) => {
      this.cities = CITIES.map(c => c.name.toLocaleLowerCase()).sort();
      console.log('found cities length: ' + this.cities.length)
    })

  }

  ngOnChanges(changes : SimpleChanges){
    if(changes.showAddRouteTogggle){
      console.log('here')
    }
    console.log("ng onchange")

  }
  showAddRoute() {
    this.showAddRouteTogggle = !this.showAddRouteTogggle;
  }
  getSelectedFromCity(fromCity) {
    this.toCities = this.cities.filter(c => c !== fromCity)
  }
  getSelectedToCity(toCity) {
    this.fromCities = this.cities.filter(c => c !== toCity)
  }
  addNewBus(form) {
    if (form.valid) {
      //this.newBus.busRouteNo = busRouteNo;
      console.log(this.newBus)
      this.busSvc.addBus(this.newBus).subscribe(res => {
        if (res) {
          alert("Bus added successfully!");
          form.reset();
        } else {
          alert("Unable to add bus!")
        }
        this.ngOnInit();
      });

    } else {
      console.log("invalid")
    }
  }

  deleteBus(busId, fromCity, toCity) {
    if (confirm("Are you sure you want to remove the bus from " + fromCity + " to " + toCity + " ?")) {
      this.busSvc.deleteBus(busId).subscribe(res => {
        alert((res) ? "Bus removed successfully!" : "Unable to remove bus!");
        this.ngOnInit();
      })
    }
  }
}
