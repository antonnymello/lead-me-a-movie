import { Component, OnInit } from '@angular/core';

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
  DEFAULT_FONT_SIZE = 13;
  fontSize: number;

  constructor(private moviesService: MoviesService) {
    this.fontSize = this.DEFAULT_FONT_SIZE;
  }

  ngOnInit() {
    this.getMovies(undefined);
  }
  //Accessibility tools
  decrease() {
    this.fontSize = this.fontSize * 0.8;
  }

  increase() {
    this.fontSize = this.fontSize * 1.2;
  }

  reset() {
    this.fontSize = this.DEFAULT_FONT_SIZE;
  }

  //Next page
  pageUp = () => {
    if (this.currentPage >= 1 && this.currentPage <= this.totalPages) {
      return this.getMovies(this.currentPage++);
    }
  };

  //Back page
  pageDown = () => {
    if (this.currentPage > 0) {
      return this.getMovies(this.currentPage--);
    }
  };

  //Showing page on application and redirection
  getMovies(page: number) {
    this.moviesService
      .getMovies(this.movieName, this.currentPage)
      .subscribe((paramName) => {
        page = this.currentPage;
        this.totalPages = (paramName as any).total_pages;
        this.movies = (paramName as any).results;
      });
  }
  //Search functions bellow
  //search by query
  searchMovies(query: string, page: number) {
    this.moviesService.searchMovies(query, page).subscribe((response) => {
      page >= 1;
      query = this.movieName;
      this.totalResults = (response as any).total_results;
      this.movies = [];
      this.movies = response['results'];
    });
  }
  //send value of query to the search function
  queryListener(value: string): void {
    this.movieName = value;
    this.currentPage = 1 + 1;
    this.searchMovies(value, 1);
  }
  //End of search functions

  //Get poster image
  getImage(path: string) {
    let images = `${this.imgUrl}${this.imgSize}${path}`;
    if (images) {
      return images;
    }
    return images;
  }

  backHome(search: string) {
    if (!search) {
      this.getMovies(1);
    }
  }
}
