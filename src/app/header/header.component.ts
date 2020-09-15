import { Component, OnInit, Output, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from './../movies/movies.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = `LEAD me a Movie`;

  constructor() {}

  ngOnInit(): void {}
}
