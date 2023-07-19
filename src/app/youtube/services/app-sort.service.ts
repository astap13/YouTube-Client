import { Injectable } from '@angular/core';

import { Sort } from '../components/sort/sort.component';

@Injectable({
  providedIn: 'root',
})
export class AppSortService {
  value: string = '';

  sortBy: Sort = {
    criteria: 'none',
    direction: true,
    keyword: '',
  };

  changeSorting(criteria: string) {
    this.sortBy.direction = !this.sortBy.direction;
    this.sortBy.criteria = criteria;
    this.sortBy.keyword = this.value;
  }
}
