import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { SignInService } from './signin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public signin: any = {
    firstName: "",
    lastName: "",
    emailId: "",
    userName: null,
    password: "",
    confirmPassword: ""
  }
  public userNameToggle: boolean = false;
  public userNameResp: string = null;
  public canProceed: boolean = true;
  constructor(private signInService: SignInService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  setUserId() {
    console.log('called' + this.userNameToggle)
    this.userNameToggle = !this.userNameToggle;
    if (this.userNameToggle) {
      this.signin.userName = this.signin.emailId.toString().substring(0, this.signin.emailId.indexOf('@')).toLowerCase();
      this.signInService.checkUserNameAvailability(this.signin.userName).subscribe((res) => {
        console.log('found resp.')
        if (res) {//UserNameAvailable
          this.userNameResp = "User name Available";
          this.canProceed = true;
        } else {// need to highlight the field
          this.userNameResp = "User name already taken. Please enter new User name";
          this.canProceed = false;
        }
      });
    } else {
      this.signin.userName = null;
      this.canProceed = false;
    }
  }
  public visited: boolean = false;
  getUserName(event: any) {
    let user = this.signin.userName.toLowerCase();
    console.log("user:" + user + " " + user.length);
    if (user.length >= 3) {
      this.visited = true;
      this.signInService.checkUserNameAvailability(this.signin.userName.toLowerCase()).subscribe((res) => {
        if (res) {//UserNameAvailable
          this.userNameResp = "User name Available";
          this.canProceed = true;
        } else {// need to highlight the field
          this.userNameResp = "User name already taken. Please enter new User name";
          this.canProceed = false;
        }
      });
      // } else {
      //   if (this.visited) {
      //     this.signin.userName = null;
      //     this.canProceed = false;
      //   }else this.visited = false;
    }

  }
  getValidationMessages(state: any, name?: string) {
    let field: string = state.path;
    let errors: string[] = [];
    if (state.errors) {
      for (let error in state.errors) {
        switch (error) {
          case "required": errors.push(`You must enter ${field}`);
            break;
          case "minlength": errors.push(`${field} must contain ${state.errors['minlength'].requiredLength} characters`);
            break;
          case "pattern":
            if (field.toString().includes("email"))
              errors.push(`${field} contains illegal characters. for example ...try entering foo@bar.com`);
            else
              errors.push(`${field} contains illegal characters`);
            break;
        }
      }
    }
    return errors;
  }

  register(form: NgForm) {
    console.log('reg mtds')
    if (!this.confirmPasswordCheck(this.signin.confirmPassword))
      alert("Password mismatch!...password and confirm password are not equal..Try entering agian!")
    else {
      if (form.valid) {
        console.log('printing whole singin comp: ' + JSON.stringify(this.signin))
        this.signInService.addUser(this.signin).subscribe((res) => {
          if (res != null || res != undefined) {
            alert("Sucessfully registered!");
            this.router.navigateByUrl("login");
          } else {
            alert("An error occured while registering..Try again later");
            this.router.navigateByUrl("buses");
          }
        });
      } else {
        console.log('sorry invalid form')
      }
    }

  }
  confirmPasswordCheck(confirmPassword: string) {
    return this.signin.confirmPassword === "" || this.signin.password == confirmPassword;
  }
  goBack() {
    this.router.navigateByUrl("buses")
  }
}
