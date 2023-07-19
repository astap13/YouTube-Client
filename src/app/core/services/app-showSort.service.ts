import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppShowSortService {
  showSort: boolean | undefined;

  toggleSort() {
    this.showSort = !this.showSort;
  }
}
