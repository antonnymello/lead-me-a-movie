import { Component, OnInit, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventEmitter } from 'events';

import { MoviesService } from './movies.service';
import { Movie } from './movie';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Button } from 'protractor';
import { R3TargetBinder } from '@angular/compiler';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  @Input() currentPage: number = 1;
  public movies: Movie[] = [];
  public totalPages: number;
  public movieName: string;
  public imgUrl = 'https://image.tmdb.org/t/p/';
  public imgSize = 'w500/';

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getMovies(undefined);
  }

  pageUp() {
    if (this.currentPage >= 1 && this.currentPage <= 500) {
      return this.getMovies((this.currentPage += 1 - 1));
    }
  }

  pageDown() {
    if (this.currentPage > 0) {
      return this.getMovies((this.currentPage -= 1 + 1));
    }
  }

  getMovies(page: number) {
    this.moviesService
      .getMovies(this.movieName, this.currentPage)
      .subscribe((paramName) => {
        page = this.currentPage;
        if (page >= 1 && page <= 500) {
          this.currentPage++;
        }
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
