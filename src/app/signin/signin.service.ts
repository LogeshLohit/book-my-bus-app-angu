import { Injectable } from "../../../node_modules/@angular/core";
import { Observable } from "../../../node_modules/rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
const PROTOCOL: String = "";
const PORT: String = "";
const SERVER: String = "api/";
@Injectable({ providedIn: 'root' })
export class SignInService {
    isUserLoggedIn: boolean = false;
    constructor(private http: HttpClient) { }
    signIn(user): Observable<any> {
        // console.log('here'+user.userName+" "+user.password+" - "+`${PROTOCOL}${PORT}login`)
        return this.http.post<any>(`${PROTOCOL}${PORT}${SERVER}login`, user);
    }
    checkUserNameAvailability(userName): Observable<any> {
        //console.log('sending userName to server for availability check, passing  username:' + userName.toLowerCase());
        return this.http.post<any>(`${PROTOCOL}${PORT}${SERVER}userName`, { "userName": userName });
    }
    addUser(user:any):Observable<any>{
        console.log('user :'+user+' sent for adding to db');
        return this.http.post<any>(`${PROTOCOL}${PORT}${SERVER}addUser`,user)
    }
}