import { createAction, props } from '@ngrx/store';

export const addAPICard = createAction(
  '[Admin Page Component] App API card',
  props<{ payload: any }>(),
);
