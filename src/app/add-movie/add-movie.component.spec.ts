 import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 import { AddMovieComponent } from './add-movie.component';
 import { ReactiveFormsModule } from  '@angular/forms';
 import { RouterTestingModule } from '@angular/router/testing';

 describe('AddMovieComponent', () => {
   let component: AddMovieComponent;
   let fixture: ComponentFixture<AddMovieComponent>;

   beforeEach(async(() => {
     TestBed.configureTestingModule({
        imports:[ ReactiveFormsModule,
                  ReactiveFormsModule,
                  RouterTestingModule],
       declarations: [ AddMovieComponent ]
     })
     .compileComponents();
   }));

   beforeEach(() => {
     fixture = TestBed.createComponent(AddMovieComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });
