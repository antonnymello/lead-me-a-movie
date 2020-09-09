import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MoviesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MoviesService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
