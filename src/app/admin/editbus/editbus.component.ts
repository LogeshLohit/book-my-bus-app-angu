import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editbus',
  templateUrl: './editbus.component.html',
  styleUrls: ['./editbus.component.css']
})
export class EditbusComponent implements OnInit {

  constructor(private router: Router, private route : ActivatedRoute) { 
   console.log('found bus for redit : '+JSON.stringify(this.route.snapshot.paramMap.get("bus")))
  }

  ngOnInit() {
  }

}
