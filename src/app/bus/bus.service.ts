import { Injectable } from "../../../node_modules/@angular/core";
import { Observable } from "../../../node_modules/rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
const PROTOCOL: String = "";
const PORT: String = "";
const SERVER: String = "/api/";
@Injectable({ providedIn: 'root' })
export class BusService {
    constructor(private http: HttpClient) { }
    getAllBuses(): Observable<any[]> {
        console.log("trying to call express server...")
        return this.http.get<any[]>(`${PROTOCOL}${PORT}${SERVER}buses`);
    }
    getAllCities(): Observable<any[]> {
        return this.http.get<any[]>(`${PROTOCOL}${PORT}${SERVER}cities`)
    }
    addBus(bus: any) {
        return this.http.post(`${PROTOCOL}${PORT}${SERVER}addBus`, bus);
    }
    deleteBus(busId){
        console.log("busid : "+busId)
        return this.http.post(`${PROTOCOL}${PORT}${SERVER}deleteBus`,busId);
    }
}