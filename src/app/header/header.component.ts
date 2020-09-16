import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { MoviesComponent } from './../movies/movies.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = `LEAD me a Movie`;
  route: Router;

  backHome(event) {
    if (event) {
      return this.route.navigate(['movie']);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
