import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phoneBook-actions';

const ContactsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const FilterReducer = createReducer('', {
  [actions.filterUpdate]: (_, { payload }) => payload,
});

export default combineReducers({
  ContactsReducer,
  FilterReducer,
});
