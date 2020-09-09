import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private discoverUrl = 'https://api.themoviedb.org/3/discover/movie';
  private apiKey = '1bb1429afba1d12438809321c1212a39';
  private language = 'pt-BR';

  constructor(private http: HttpClient) {}

  getMovies(query: string = '', page: number = 1) {
    if (query) {
      return this.searchMovies(query, page);
    }
    return this.discoverMovies(page);
  }

  searchMovies(query: string, page: number) {
    let search = `${this.searchUrl}?api_key=${this.apiKey}&language=${this.language}&query=${query}&include_adult=false`;

    if (query) {
      return this.http.get(search);
    }
    return null;
  }

  discoverMovies(page: number) {
    let discover = `${this.discoverUrl}?api_key=${this.apiKey}&language=${this.language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    return this.http.get(discover);
  }
}
