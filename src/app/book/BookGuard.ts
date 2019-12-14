import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "../../../node_modules/@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";
import { map } from "rxjs/operators";
import { BookBusService } from './bookbus.service';

@Injectable({ providedIn: 'root' })
export class BookGuard {
    constructor(private router: Router, private bookBusSvc: BookBusService) {
        console.log('in book auth guard : ' + bookBusSvc.isUserLogged)
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this.bookBusSvc.isUserLogged) {
            console.log('is not logged')
            this.router.navigateByUrl('login');
            return false;
        } else {
            console.log('is logged')
        }
        return true;
    }
}