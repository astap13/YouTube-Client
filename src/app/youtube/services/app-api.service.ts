import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Responce } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class AppApiService {
  private readonly API_KEY = 'AIzaSyDYaLgy2pXNfpX2o9_Fi-2L4q9pnqNCl0s';

  private readonly API_URL = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) {}

  searchVideos(query: string, maxResults: number = 15): Observable<Responce> {
    const url = `${this.API_URL}/search?key=${this.API_KEY}&type=video&part=snippet&maxResults=${maxResults}&q=${query}`;
    return this.http.get<Responce>(url);
  }

  getVideoDetails(videoIds: string): Observable<any> {
    const url = `${this.API_URL}/videos?key=${this.API_KEY}&id=${videoIds}&part=snippet,statistics`;
    return this.http.get<any>(url);
  }
}
