import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Movie } from '../models/movie'

@Component({
  selector: 'app-list-existing-movies',
  templateUrl: './list-existing-movies.component.html',
  styleUrls: ['./list-existing-movies.component.scss']
})
export class ListExistingMoviesComponent implements OnInit {

  public listMovie : Movie[];

  constructor( private data: DataService ) { }
  ngOnInit() {
    this.data.currentList.subscribe(movies => this.listMovie = movies);
  }
  removeItemChild( $event ){
    this.data.removeItem( $event );
  }
  selectItem( item : Movie ){
    this.data.selectItem( item );
  }
}
