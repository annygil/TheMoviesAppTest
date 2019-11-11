import { Component, OnInit,Input, Output, EventEmitter }  from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-fav-item',
  templateUrl: './fav-item.component.html',
  styleUrls: ['./fav-item.component.scss']
})
export class FavItemComponent implements OnInit {

  @Input() item:Movie;
  constructor() { }

  @Output() removeItem=new EventEmitter<number>();
  ngOnInit() {

  }
  remove(id:number){
    this.removeItem.emit(id);
  }
}
