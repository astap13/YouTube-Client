import { Injectable } from '@angular/core';

import { Item } from '../models/search-item.model';
import { AppVideosService } from './app-videos.service';

@Injectable({
  providedIn: 'root',
})
export class AppIdService {
  constructor(public videosService: AppVideosService) {}

  getPostId(etag: string) {
    return this.videosService.getVideos()?.find((p: Item) => p.etag === etag);
  }
}
