import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from '../models/movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientExternalService {
  public baseUrl = 'http://www.mocky.io/v2/5dc3c053300000540034757b';
  public listSource = new BehaviorSubject([]);
  public currentList = this.listSource.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getFavoriteMovies();
  }
  
  public getFavoriteMovies() {
    this.httpClient.get<Movie[]>(this.baseUrl)
    .subscribe((res:any)=>{
      this.listSource.next(res.movies);
    })  
  }
}
