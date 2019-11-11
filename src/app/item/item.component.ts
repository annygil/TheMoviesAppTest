import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item : Movie = new Movie();
  @Output() removeItem=new EventEmitter<string>();
  
  constructor() { }
  ngOnInit() { }
  
  remove( id : string ){
    this.removeItem.emit( id );
  }
}
