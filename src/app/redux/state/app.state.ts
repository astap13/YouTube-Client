import { Item } from 'src/app/youtube/models/search-item.model';

export interface AppState {
  personalCards: Item[];
  APICards: Item[];
}
