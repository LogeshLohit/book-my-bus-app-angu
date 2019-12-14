import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: "busSearchFilter"
})
export class BusSearchFilter implements PipeTransform {
    transform(buses: any[], busNo?: string, fromCity?: string, toCity?: string) {

        if (busNo) {
            console.log('found search : ' + busNo)
            buses = [...buses.filter((bus) => bus.busRouteNo.toLocaleLowerCase().startsWith(busNo.toLocaleLowerCase()))]
            console.log(buses)
        }

        if (fromCity) {
            console.log('from city : ' + fromCity)
            buses = [...buses.filter((bus) => bus.fromCity.toLocaleLowerCase().startsWith(fromCity.toLocaleLowerCase()))]
        }

        if (toCity) {
            console.log('to city : ' + toCity)
            buses = [...buses.filter((bus) => bus.toCity.toLocaleLowerCase().startsWith(toCity.toLocaleLowerCase()))]
        }


        return buses;
    }
}