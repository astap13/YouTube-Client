import { Injectable } from '@angular/core';

import { Item } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class AppVideosService {
  videos: Item[] = [];

  setVideos(videos: Item[]) {
    this.videos = videos;
  }

  getVideos(): Item[] {
    return this.videos;
  }
}
