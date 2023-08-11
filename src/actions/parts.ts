import { Dispatch } from 'redux';

export const INCREMENT_PART = 'local/INCREMENT_PART';
export const DECREMENT_PART = 'local/DECREMENT_PART';
export const CREATE_PART = 'local/CREATE_PART';

export const incrementPart = (partName: string) => (dispatch: Dispatch<any>) =>
  dispatch({
    type: INCREMENT_PART,
    partName,
  });

export const decrementPart = (partName: string) => (dispatch: Dispatch<any>) =>
  dispatch({
    type: DECREMENT_PART,
    partName,
  });

export const createNewPart = (partName: string) => (dispatch: Dispatch<any>) =>
  dispatch({
    type: CREATE_PART,
    partName,
  });
