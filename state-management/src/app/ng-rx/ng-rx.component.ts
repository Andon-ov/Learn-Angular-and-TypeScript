import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-rx',
  templateUrl: './ng-rx.component.html',
  styleUrls: ['./ng-rx.component.css'],
})
export class NgRxComponent implements OnInit {
  ngOnInit(): void {
    this.demoTest();
  }
  demoTest() {
    // Redux => Design Pattern => Single source of truth - State
    // How we change state?
    // * we do not mutate in directly, we dispatch an ACTION
    // Reducer capture the Action and does something

    //* Synchronous simulation of redux pattern

    //! Type of the state
    interface AppState {
      str: string;
      obj: any;
      bool: boolean;
    }

    //! Default state
    const initialState: AppState = {
      str: '',
      obj: null,
      bool: false,
    };

    //! Action
    const EVENT_ONE = 'EVENT_1';
    const EVENT_TWO = 'EVENT_2';
    const EVENT_THREE = 'EVENT_3';

    //! Reducer
    function reducer(state: AppState, action: any) {
      switch (action.type) {
        case EVENT_ONE:
          return { ...state, str: action.value };

        case EVENT_TWO:
          return { ...state, obj: action.value };

        case EVENT_THREE:
          return { ...state, bool: action.value };

        default:
          return state;
      }
    }

    //! Combine events with reducer and initial state
    const actinsCollection = [
      {
        type: EVENT_ONE,
        value: 'test123',
      },
      {
        type: EVENT_TWO,
        value: { name: 'Denis', age: 21 },
      },
      {
        type: EVENT_THREE,
        value: true,
      },
    ];

    //! Simulate dispatching action
    const result = actinsCollection.reduce(reducer, initialState);
    console.log(result);
  }
}
