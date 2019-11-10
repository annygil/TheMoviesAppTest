import { Injectable } from '@angular/core';
import {Movie} from '../models/movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public list:Movie[]= [
    {
        title: "Forest Gump",
        release: new Date('12-12-1994'),
        description: "Comedy",
        image:"",
        id:1
        
    },
    {
        title: "Harry Potter",
        release: new Date('12-12-2001'),
        description: "Fantasy Fiction",
        image:"",
        id:2  
    },
    {
        title: "Titanic",
        release: new Date('12-12-1998'),
        description: "Romance",
        image:"",
        id:3
    },
     {
        title: "Best Worst Movie",
        release: new Date('12-12-2009'),
        description: "Comedy",
        image:"",
        id:4
    },
    {
        title: "Troll 2",
        release: new Date('12-12-2003'),
        description: "Horror",
        image:"",
        id:5

    }
];

  private listSource = new BehaviorSubject(this.list);
  currentList = this.listSource.asObservable();

  constructor() {

   }
   changeMovies(movies: any) {
    this.listSource.next(this.list);
  }
  removeItem(id:number){
   let datalist: any[] = this.listSource.getValue();
    datalist.forEach((item, index) => {
        if(item.id === id) { datalist.splice(index, 1); }
    });
    this.listSource.next(datalist);
  }
  addUpdateItem(){

  }
}
