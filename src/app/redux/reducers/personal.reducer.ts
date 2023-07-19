import { createReducer, on } from '@ngrx/store';

import { addPersonalCard } from '../actions/personal.actions';
import { AppState } from '../state/app.state';

export const initialState: AppState = {
  personalCards: [],
  APICards: [],
};

export const personalCardReducer = createReducer(
  initialState,
  on(addPersonalCard, (state, { payload }) => {
    return { ...state, personalCards: [...state.personalCards, payload] };
  }),
);
