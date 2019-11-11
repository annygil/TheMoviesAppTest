import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public movie:Movie;
  private listSource = new BehaviorSubject([]);
  public currentList = this.listSource.asObservable();
  private selectedItem = new BehaviorSubject(this.movie);
  public currentItem = this.selectedItem.asObservable();

  constructor() { }

  selectItem( item : any ) {
    this.selectedItem.next(item);
  }
  removeItem( id : string ){
    let datalist: any[] = this.listSource.getValue();
    datalist.forEach((item, index) => {
        if(item.id === id) { datalist.splice(index, 1); }
    });
    this.listSource.next(datalist);
  }
  addItem( item : Movie ){
    let datalist: any[] = this.listSource.getValue();
    item.id=this.uuidv4();
    datalist.push(item);
    this.listSource.next(datalist);  
  }
   uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
