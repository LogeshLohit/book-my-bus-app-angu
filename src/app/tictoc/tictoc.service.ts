import { Injectable } from "../../../node_modules/@angular/core";
import { Observable } from "../../../node_modules/rxjs";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
const PROTOCOL: String = "http://localhost:";
const PORT: String = "8080/";
@Injectable({ providedIn: 'root' })
export class TicTocService {
    constructor(private http: HttpClient) { }
    addEntry(move, player): Observable<any> {
        // console.log('here'+user.userName+" "+user.password+" - "+`${PROTOCOL}${PORT}login`)
        let params = new HttpParams().set('move', move).set('player', player);

        return this.http.post<any>(`${PROTOCOL}${PORT}tictoc`, params);
    }

}