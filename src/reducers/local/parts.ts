import { AnyAction } from 'redux';
import { DECREMENT_PART, INCREMENT_PART } from '../../actions/parts';

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

    default:
      return state;
  }
};

export default partsReducer;
