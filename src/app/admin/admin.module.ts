import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { EditbusComponent } from './editbus/editbus.component';
import { AddcityComponent } from './addcity/addcity.component';
import { EditcityComponent } from './editcity/editcity.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
let routing = RouterModule.forChild([
  { path: "auth", component: AdminComponent },
  { path: "main", component: MainComponent },
  { path: "edit/:bus", component: EditbusComponent },
  { path: "**", redirectTo: "auth" }
])

@NgModule({
  declarations: [AdminComponent, MainComponent, EditbusComponent, AddcityComponent, EditcityComponent, UserdetailsComponent],
  imports: [
    CommonModule, RouterModule, FormsModule, routing
  ],
  exports: [AdminComponent, MainComponent]
})
export class AdminModule { }
