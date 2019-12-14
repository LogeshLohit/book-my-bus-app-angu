import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private admin = {
    adminId: "",
    password: ""
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigateByUrl("buses")
  }
  handleAdminLogin() {
    if (this.admin.adminId === "admin" && this.admin.password == "admin") {
      console.log("valid admin id");
      this.router.navigateByUrl("/admin/main");
    }else console.log("In valid admin id");
  }

}
