import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ListExistingMoviesComponent } from '../list-existing-movies/list-existing-movies.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { ItemComponent } from '../item/item.component'
import { ReactiveFormsModule } from  '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule,
                ReactiveFormsModule,
                RouterTestingModule],
      declarations: [ HomeComponent,
                      ListExistingMoviesComponent,
                      MovieDetailComponent,
                      ItemComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
