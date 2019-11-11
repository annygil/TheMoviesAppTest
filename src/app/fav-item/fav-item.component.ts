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
  id=this.uuidv4();

  @Output() removeItem=new EventEmitter<number>();
  ngOnInit() {
    
  }
  remove(id:number){
    this.removeItem.emit(id);
  }
  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
