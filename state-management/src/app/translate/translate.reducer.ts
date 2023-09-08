import { Action } from '@ngrx/store';

export function translateReducer(state: string = 'Hello!', action: Action) {
  switch (action.type) {
    case 'BULGARIAN':
      return (state = 'Здравей!');
    case 'ITALIAN':
      return (state = 'Chao!');

    default:
      return state;
  }
  console.log(action.type), state;
  return state;
}
