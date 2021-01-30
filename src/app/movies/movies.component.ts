import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
  movies: Movie[] = [];
  totalPages: number;
  imgUrl = 'https://image.tmdb.org/t/p/';
  imgSize = 'w500/';
  defaultFontSize = 13;
  fontSize: number;
  @ViewChild('box') box: ElementRef;

  constructor(private moviesService: MoviesService) {
    this.fontSize = this.defaultFontSize;
  }

  ngOnInit() {
    this.getMovies(undefined);
  }

  //Home button
  clear() {
    this.box.nativeElement.value = '';
    this.movieName = '';
    this.currentPage = 1;
    this.totalResults = 1;
    this.getMovies(undefined);
  }

  //Accessibility tools
  decrease() {
    if (this.fontSize <= 22 && this.fontSize > 12) {
      this.fontSize = this.fontSize * 0.8;
    }
  }

  increase() {
    if(this.fontSize < 18){
    this.fontSize = this.fontSize * 1.2;
    }
  }

  reset() {
    this.fontSize = this.defaultFontSize;
  }
  //End of accessibility tools

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
    this.currentPage = 1;
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
}
