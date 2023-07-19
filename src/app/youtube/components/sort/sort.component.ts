import { Component } from '@angular/core';

import { AppSortService } from '../../services/app-sort.service';

export interface Sort {
  criteria: string;
  direction: boolean;
  keyword: string;
}

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  providers: [],
})
export class SortComponent {
  constructor(public sortService: AppSortService) {}
}
