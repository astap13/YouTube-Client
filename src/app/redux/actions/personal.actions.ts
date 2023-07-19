import { createAction, props } from '@ngrx/store';

import { Item } from 'src/app/youtube/models/search-item.model';

export const addPersonalCard = createAction(
  '[Admin Page Component] App personal card',
  props<{ payload: Item }>(),
);
