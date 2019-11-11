import { Component, OnInit } from '@angular/core';
import {HttpClientExternalService} from '../services/http-client-external.service'

@Component({
  selector: 'app-top-five-movies',
  templateUrl: './top-five-movies.component.html',
  styleUrls: ['./top-five-movies.component.scss']
})
export class TopFiveMoviesComponent implements OnInit {

  constructor(public service : HttpClientExternalService) { }
  public listMovies : any = [];

  ngOnInit() {
    this.get();

  }
  get(){
    this.service.currentList.subscribe(list=>this.listMovies=list);
  }
}
