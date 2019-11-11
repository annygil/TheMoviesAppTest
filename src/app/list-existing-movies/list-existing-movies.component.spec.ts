import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListExistingMoviesComponent } from './list-existing-movies.component';
import { ItemComponent } from '../item/item.component';
import { ReactiveFormsModule } from  '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
describe('ListExistingMoviesComponent', () => {
  let component: ListExistingMoviesComponent;
  let fixture: ComponentFixture<ListExistingMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
                ReactiveFormsModule,
                RouterTestingModule], 
      declarations: [ ListExistingMoviesComponent,
                      ItemComponent ]
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
