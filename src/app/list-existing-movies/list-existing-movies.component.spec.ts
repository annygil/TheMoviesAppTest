import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExistingMoviesComponent } from './list-existing-movies.component';

describe('ListExistingMoviesComponent', () => {
  let component: ListExistingMoviesComponent;
  let fixture: ComponentFixture<ListExistingMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExistingMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExistingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
