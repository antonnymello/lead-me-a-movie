import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { MoviesService } from './movies.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  currentPage: number = 1;
  movieName: string;
  totalResults: number;
  public movies: Movie[] = [];
  public totalPages: number;
  public imgUrl = 'https://image.tmdb.org/t/p/';
  public imgSize = 'w500/';

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getMovies(undefined);
  }

  pageUp = () => {
    if (this.currentPage >= 1 && this.currentPage <= this.totalPages) {
      return this.getMovies((this.currentPage += 1 - 1));
    }
  };

  pageDown = () => {
    if (this.currentPage > 0) {
      return this.getMovies((this.currentPage -= 1 + 1));
    }
  };

  getMovies(page: number) {
    this.moviesService
      .getMovies(this.movieName, this.currentPage)
      .subscribe((paramName) => {
        page = this.currentPage;
        if (this.movieName) {
          this.searchMovies(this.movieName, this.currentPage);
        }
        if (page >= 1) {
          this.currentPage++;
        }
        this.totalPages = (paramName as any).total_pages;
        this.movies = (paramName as any).results;
      });
  }

  searchMovies(query: string, page: number) {
    this.moviesService.searchMovies(query, page).subscribe((response) => {
      query = this.movieName;
      page = 1;

      this.totalResults = (response as any).total_results;
      this.movies = [];
      this.movies = response['results'];
    });
  }

  queryListener(value: string): void {
    this.movieName = value;
    this.currentPage = 1 + 1;
    this.searchMovies(value, 1);
  }

  getImage(path: string) {
    let images = `${this.imgUrl}${this.imgSize}${path}`;
    if (images) {
      return images;
    }
    return images;
  }
}
