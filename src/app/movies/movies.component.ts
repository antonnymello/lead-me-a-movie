import { Component, OnInit } from '@angular/core';
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
  public movies: Movie[] = [];
  public actualPage: number;
  public currentPage: number = 1;
  public totalPages: number;
  public movieName = 'string';
  public imgUrl = 'https://image.tmdb.org/t/p/';
  public imgSize = 'w500/';
  public overview: string;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getMovies(1 && 0);
  }

  getMovies(value: number) {
    this.moviesService
      .getMovies(this.movieName, this.currentPage)
      .subscribe((paramName) => {
        value = this.currentPage++;
        this.actualPage;
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
