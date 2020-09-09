import { Component, OnInit } from '@angular/core';

import { MoviesComponent } from './../movies/movies.component';
import { MoviesService } from './../movies/movies.service';

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
