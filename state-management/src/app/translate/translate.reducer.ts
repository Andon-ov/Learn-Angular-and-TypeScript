import { Action } from '@ngrx/store';

export function translateReducer(state: string = 'Hello!', action: Action) {
  console.log(action.type), state;
  return state;
}
