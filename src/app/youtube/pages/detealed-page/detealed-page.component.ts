import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Item } from 'src/app/youtube/models/search-item.model';
import { AppIdService } from 'src/app/youtube/services/app-Id.service';

import { AppApiService } from '../../services/app-api.service';

@Component({
  selector: 'app-detealed-page',
  templateUrl: './detealed-page.component.html',
  styleUrls: ['./detealed-page.component.scss'],
})
export class DetealedPageComponent implements OnInit {
  constructor(
    private rote: ActivatedRoute,
    public idService: AppIdService,
    public apiService: AppApiService,
  ) {}

  video: Item | undefined;

  ngOnInit(): void {
    this.rote.params.subscribe((params: Params) => {
      const videoId = params['id'];
      this.apiService.getVideoDetails(videoId).subscribe((response) => {
        this.video = response.items[0];
      });
    });
  }
}
