import { Item, Pageinfo } from './search-item.model';

export interface Responce {
  kind?: string;
  etag?: string;
  id?: string;
  pageInfo?: Pageinfo;
  items?: Item[];
}
