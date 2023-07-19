import { createReducer, on } from '@ngrx/store';

import { addAPICard } from '../actions/API.actions';
import { AppState } from '../state/app.state';

export const initialState: AppState = {
  personalCards: [],
  APICards: [],
};

export const personalAPIReducer = createReducer(
  initialState,
  on(addAPICard, (state, { payload }) => {
    return { ...state, APICards: [...state.APICards, payload] };
  }),
);
