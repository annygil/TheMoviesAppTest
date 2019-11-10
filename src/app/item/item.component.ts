import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item:Movie;
  constructor() { }

  @Output() removeItem=new EventEmitter<number>();
  ngOnInit() {

  }
  remove(id:number){
    this.removeItem.emit(id);
  }
}
