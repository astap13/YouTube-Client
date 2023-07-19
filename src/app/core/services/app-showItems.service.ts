import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppShowItemsService {
  searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');

  search(value: string) {
    this.searchQuery.next(value);
  }
}
