import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { BookBusService } from '../book/bookbus.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user = {
    userName: "",
    password: ""
  };
  private loginError: string = null;
  isLogged = false;


  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute, private bookBusSvc: BookBusService) { }

  handleLogin() {
    //console.log(this.user.userName + "fe " + this.user.password)
    this.loginService.login(this.user).subscribe((res) => {
      if (res == null || res == undefined) {
        this.loginError = "In valid user details. Try again";
        this.user.userName = "";
        this.user.password = "";
        this.router.navigateByUrl("login");
      } else {
        console.log("Hurray! Successfully logged in!!")
        this.loginError = null;
        this.isLogged = true;
        this.bookBusSvc.setUserLoggedStatus(true);
        this.loginService.setLoggedUser(res.data);
        this.loginService.setLoggedUserToken(res.token);
        console.log("user's token: "+this.loginService.getLoggedUserToken());
        console.log("logged in user dtls :"+this.loginService.getLoggedUser())
        if (this.bookBusSvc.getBookedBus() != null || this.bookBusSvc.getBookedBus() != undefined)
          this.router.navigateByUrl("book");
        else this.router.navigateByUrl("buses")
      }
    })
  }

  redirectToSignIn() {
    this.router.navigateByUrl("signin");
  }

  ngOnInit() {
  }

}
//AY2rQU4wQ68lagYPSWYkLk1QD2dp6hUdmPetb1AzCmUjaetyZ-cqwFDuxTMa0oFyiCoZ4ZVe6mZBzwK3
//logesh.jeppiaar-facilitator@gmail.com