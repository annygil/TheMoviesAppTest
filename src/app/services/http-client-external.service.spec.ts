import { TestBed, inject } from '@angular/core/testing';

import { HttpClientExternalService } from './http-client-external.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { noUndefined } from '@angular/compiler/src/util';
import { ReactiveFormsModule } from  '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
describe('HttpClientExternalService', () => {
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,
                ReactiveFormsModule,
                ReactiveFormsModule,
                RouterTestingModule],
    providers: [HttpClientExternalService]
  }));

  it('should be created', () => {
    const service: HttpClientExternalService = TestBed.get(HttpClientExternalService);
    expect(service).toBeTruthy();
  });
  it('should have getFavoriteMovies function'),
    inject([HttpClientExternalService],(service:HttpClientExternalService)=>{
      expect(service.getFavoriteMovies).toBeTruthy();
  })
  
  it('should have getFavoriteMovies list distintc of null'),
    inject([HttpClientExternalService],(service:HttpClientExternalService)=>{
      service.getFavoriteMovies();
      expect(service.listSource).not.toBe(null);
  })
});
