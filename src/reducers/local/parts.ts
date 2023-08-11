import { AnyAction } from 'redux';
import { CREATE_PART, DECREMENT_PART, INCREMENT_PART } from '../../actions/parts';

// import { v4 as uuid } from 'uuid';

const initialState = [
  {
    name: 'Wheel',
    amount: 0,
  },
  {
    name: 'Chasis',
    amount: 0,
  },
  {
    name: 'Engine',
    amount: 0,
  },
  {
    name: 'Windshield',
    amount: 0,
  },
];

const partsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT_PART: {
      const idx = state.findIndex(part => part.name === action.partName);

      return state.map((part, index) => index === idx ? {
        ...part,
        amount: part.amount + 1
      } : part);
    }

    case DECREMENT_PART: {
      const idx = state.findIndex(part => part.name === action.partName);

      return state.map((part, index) => index === idx ? {
        ...part,
        amount: part.amount - 1
      } : part);
    }

    case CREATE_PART: {
      return [...state, {name: action.partName, amount: 0}];
    }

    default:
      return state;
  }
};

export default partsReducer;
