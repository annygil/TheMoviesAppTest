import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Movie } from '../models/movie'
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-existing-movies',
  templateUrl: './list-existing-movies.component.html',
  styleUrls: ['./list-existing-movies.component.scss']
})
export class ListExistingMoviesComponent implements OnInit {

  public listMovie : Movie[];

  constructor( private data: DataService, private route : Router ) { }
  ngOnInit() {
    this.data.currentList.subscribe((movies:Movie[]) => {
        this.listMovie = movies
      },error=>{
        this.route.navigate(["/error"]);

      });
    ;
  }
  removeItemChild( $event ){
    this.data.removeItem( $event );
  }
  selectItem( item : Movie ){
    this.data.selectItem( item );
  }
}
