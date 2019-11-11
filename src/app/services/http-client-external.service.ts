import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from '../models/movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientExternalService {
  baseUrl = 'http://www.mocky.io/v2/5dc3c053300000540034757b';
  private listSource = new BehaviorSubject([]);
  currentList = this.listSource.asObservable();
  constructor(private httpClient: HttpClient) {
    this.getFavoriteMovies();
   }
  
  public getFavoriteMovies() {
    this.httpClient.get(this.baseUrl)
    .subscribe((res:any)=>{
     // console.log(res.movies)
      this.listSource.next(res.movies);
    })
    
  }
}
