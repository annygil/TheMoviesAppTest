import { TestBed, inject} from '@angular/core/testing';
import { DataService } from './data.service';
import { Movie } from '../models/movie'
describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DataService]

  }));
  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
  it('should have addItem function'),
    inject([DataService],(service:DataService)=>{
      expect(service.addItem).toBeTruthy();
  })
  
  it('should have addItem is working'),
    inject([DataService],(service:DataService)=>{
      const movie:Movie=new Movie;
      movie.image="";
      movie.title="test";
      movie.description="movie description";
      expect(service.addItem(movie)).not.toBe(false);

  })
});
