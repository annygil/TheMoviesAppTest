import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { DataService } from '../services/data.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  public imagePath;
  public imgURL: any;
  public release: any=new Date();
  public message: string;
  public itemForm:Movie=<Movie>{};
  public MovieForm: FormGroup;
  submitted = false;
  constructor(public data:DataService,public fb: FormBuilder, private route: Router) {
    this.MovieForm = this.createSignupForm();
   }
  createSignupForm(){
   return this.fb.group({
      title: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      image:  [null, Validators.compose([Validators.required])],
      release:[null, []],
    });
  }

  ngOnInit() {}

  save(){
    if (!this.MovieForm.invalid) {
      this.itemForm.image=this.imgURL;
      this.itemForm.title=this.MovieForm.value.title;
      this.itemForm.description=this.MovieForm.value.description;
      this.itemForm.release=new Date(this.release);
      var response=this.data.addItem(this.itemForm);
      if(response ==true){
        this.route.navigate(["/home"]);
      }else{
        this.route.navigate(["/404"]);
      }
    }
  }
  preview(event) {
    var files = event.target.files;
 
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result;
     
      }
    }
}
