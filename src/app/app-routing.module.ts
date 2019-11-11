import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { TopFiveMoviesComponent } from './top-five-movies/top-five-movies.component';
import { ErrorComponent } from './error/error.component'
const routes: Routes = [];
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'addMovie', component: AddMovieComponent },
      { path: 'top', component: TopFiveMoviesComponent },
      { path: '404', component: ErrorComponent }
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }


