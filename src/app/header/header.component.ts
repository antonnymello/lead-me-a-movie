import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MoviesService } from './../movies/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = `LEAD me a Movie`;
  query: string;

  constructor(searchService: MoviesService) {

  }


  ngOnInit(): void { }
}
