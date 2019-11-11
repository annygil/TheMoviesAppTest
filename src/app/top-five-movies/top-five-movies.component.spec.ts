import { inject,
  tick,
  TestBed,
  getTestBed,
  async,
  fakeAsync,
  ComponentFixture } from '@angular/core/testing';

import { TopFiveMoviesComponent } from './top-five-movies.component';
import { Movie } from '../models/movie';
import { HttpClientExternalService } from '../services/http-client-external.service';
import {FavItemComponent} from '../fav-item/fav-item.component'
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
const newMovie = new Movie();
newMovie.title = "my new movie";
newMovie.release = new Date();
newMovie.description = "my movie description";

const httpClientExternalServiceStub = {
  getFavoriteMovies() {
  }
};

describe('TopFiveMoviesComponent', () => {
  let component: TopFiveMoviesComponent;
  let fixture: ComponentFixture<TopFiveMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ TopFiveMoviesComponent,
                      FavItemComponent ],
      providers: [ HttpClientExternalService]
    })
    .compileComponents();
  }));
  
  
  beforeEach(() => {
    fixture = TestBed.createComponent(TopFiveMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
