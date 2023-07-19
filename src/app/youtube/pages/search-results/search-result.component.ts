import { Component, OnInit } from '@angular/core';

import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter,
  forkJoin,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';
import { AppShowItemsService } from 'src/app/core/services/app-showItems.service';

import { Item } from '../../models/search-item.model';
import { AppApiService } from '../../services/app-api.service';
import { AppSortService } from '../../services/app-sort.service';
import { AppVideosService } from '../../services/app-videos.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  videos: Item[] = [];

  searchTerms: BehaviorSubject<string> = this.showItemsService.searchQuery;

  constructor(
    public sortService: AppSortService,
    public showItemsService: AppShowItemsService,
    public apiService: AppApiService,
    private videosService: AppVideosService,
  ) {}

  ngOnInit(): void {
    this.searchTerms
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((term: string) => term.length >= 3),
        switchMap((term: string) => {
          return this.apiService.searchVideos(term);
        }),
        mergeMap((response) => {
          const videoIds = response.items!.map((item) => item.id?.videoId).join(',');
          return forkJoin({
            searchResponse: of(response),
            detailsResponse: this.apiService.getVideoDetails(videoIds),
          });
        }),
      )
      .subscribe(({ searchResponse, detailsResponse }) => {
        const videos = searchResponse.items!.map((item, index) => {
          const detailsItem = detailsResponse.items[index];
          if (!detailsItem || !detailsItem.statistics) {
            console.error('Invalid detailsItem:', detailsItem);
            return item;
          }
          return {
            ...item,
            statistics: detailsItem.statistics,
          };
        });
        this.videos = videos;
        this.videosService.setVideos(videos);
      });
  }
}
