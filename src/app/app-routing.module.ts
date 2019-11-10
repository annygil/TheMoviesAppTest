import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [];

@NgModule({
  imports: [
    
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent }
   //   { path: 'products/:productId', component: MoivDetailsComponent },
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }


