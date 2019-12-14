import { Component, OnInit } from '@angular/core';
import { TicTocService } from './tictoc.service';

@Component({
  selector: 'app-tictoc',
  templateUrl: './tictoc.component.html',
  styleUrls: ['./tictoc.component.css']
})
export class TictocComponent implements OnInit {

  oneone: boolean = false;
  tiles: any[] = [];
  counter: number = 0;
  tile: string;
  player : string ;
  result :any ;
  constructor(private svc: TicTocService) { }

  ngOnInit() {
  }

  fillTile(tile) {
    console.log("tile found : " + tile);
    this.oneone = true;
    if (this.counter % 2 == 0)
      this.player = 'X';
    else this.player = 'O';
    this.tiles[tile] = this.player;
    console.log(this.tiles)
    this.counter++;
    this.tile = tile;
    this.svc.addEntry(this.tile, this.player).subscribe(res=>{
      this.result = res.response
      console.log("res : "+this.result)
    });
  }
  call() {
    console.log("call")
  }

}
