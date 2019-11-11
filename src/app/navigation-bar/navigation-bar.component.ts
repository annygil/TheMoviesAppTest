import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
  }
  redirectToAdd(){
    this.route.navigate(["/addMovie"]);

  }
  redirectToHome(){
    this.route.navigate(["/home"]);

  }
  redirectToTopFive(){
    this.route.navigate(["/top"]);

  }
}
