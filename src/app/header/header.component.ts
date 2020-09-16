import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesComponent } from './../movies/movies.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = `LEAD me to Movies`;

  router: Router;

  constructor() {}

  ngOnInit(): void {}
}
