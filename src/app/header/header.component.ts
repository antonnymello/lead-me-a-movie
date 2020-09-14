import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = `LEAD me a Movie`;
  query: string;

  constructor() {}

  ngOnInit(): void {}
}
