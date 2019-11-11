import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { Movie } from '../models/movie';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(public data : DataService) { }
  public itemDetail: Movie;
  public isItemSelected:boolean=false;
  ngOnInit() {

    this.data.currentItem.subscribe(item=>{
      this.itemDetail= item;
      this.itemDetail==undefined?this.isItemSelected=false:this.isItemSelected=true;
    });
  }


}
