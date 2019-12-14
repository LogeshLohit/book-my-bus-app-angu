import { Injectable } from "../../../node_modules/@angular/core";
import { Observable } from "../../../node_modules/rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
const PROTOCOL: String = "";
const PORT: String = "";
const SERVER: String = "api/";
@Injectable({ providedIn: 'root' })
export class LoginService {
    isUserLoggedIn: boolean = false;
    loggedUser: any;
    loggedUserToken: any = null;
    constructor(private http: HttpClient) { }
    login(user): Observable<any> {
        //console.log('here'+user.userName+" "+user.password+" - "+`${PROTOCOL}${PORT}login`)
        return this.http.post<any>(`${PROTOCOL}${PORT}${SERVER}login`, user);
    }
    setLoggedUser(user: any) {
        this.loggedUser = user;
    }
    getLoggedUser() {
        return this.loggedUser;
    }
    setLoggedUserToken(token: any){
        this.loggedUserToken = token;
    }
    getLoggedUserToken(){
        return this.loggedUserToken;
    }   
}