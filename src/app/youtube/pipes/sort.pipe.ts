import { Pipe, PipeTransform } from '@angular/core';

import { Item } from 'src/app/youtube/models/search-item.model';

import { Sort } from '../components/sort/sort.component';

@Pipe({
  name: 'Sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(post: Item[], sortOrder: Sort): Item[] | undefined {
    if (!sortOrder || sortOrder.criteria === 'none') {
      return post;
    }
    if (sortOrder.criteria === 'Date') {
      if (sortOrder.direction === true) {
        const sort: Item[] = [...post].sort((a: Item, b: Item) =>
          a.snippet!.publishedAt!.localeCompare(b.snippet!.publishedAt!),
        );
        return sort;
      }
      if (sortOrder.direction === false) {
        const sort: Item[] = [...post].sort((a: Item, b: Item) =>
          b.snippet!.publishedAt!.localeCompare(a.snippet!.publishedAt!),
        );
        return sort;
      } else {
        return post;
      }
    }
    if (sortOrder.criteria === 'Views') {
      if (sortOrder.direction === true) {
        const sort: Item[] = [...post].sort(
          (a: Item, b: Item) =>
            Number(a.statistics?.viewCount || 0) - Number(b.statistics?.viewCount || 0),
        );
        return sort;
      }
      if (sortOrder.direction === false) {
        const sort: Item[] = [...post].sort(
          (a: Item, b: Item) =>
            Number(b.statistics?.viewCount || 0) - Number(a.statistics?.viewCount || 0),
        );
        return sort;
      }
    }
    if (sortOrder.criteria === 'Sentance') {
      if (!sortOrder.keyword) {
        return post;
      }
      sortOrder.keyword = sortOrder.keyword.toLowerCase();
      const filter: Item[] = [...post].filter((item) => {
        return item.snippet?.title?.toLocaleLowerCase().includes(sortOrder.keyword);
      });
      return filter;
    } else {
      return post;
    }
  }
}
