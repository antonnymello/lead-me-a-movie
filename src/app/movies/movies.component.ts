import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesService } from './movies.service';
import { Movie } from './movie';
import { DetailsComponent } from './../details/details.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  actualPage: number;
  totalPages: number;
  movieName = 'string';
  imgUrl = 'https://image.tmdb.org/t/p/';
  imgSize = 'w500/';
  overview: string;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies(this.movieName).subscribe((paramName) => {
      this.actualPage = 1;
      this.totalPages = (paramName as any).total_pages;
      this.movies = (paramName as any).results;
    });
  }

  getImage(path: string) {
    let images = `${this.imgUrl}${this.imgSize}${path}`;
    if (images) {
      return images;
    }
    return images;
  }
}
