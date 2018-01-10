import { SET_LUNCH_RATE } from './lunchTypes';

const initialState = {
  rate: {
    klasyk: '5',
    carbonara: '2',
    sezam: '4',
    rosol: '1',
    pomidorowa: '3',
    kurczak: '5',
  }
};

export default function lunch(state = initialState, action) {
  const nextState = state;
  console.log(nextState);
  switch (action.type) {
    case SET_LUNCH_RATE:
      console.log(action);
      _.set(nextState, `rate.${action.id}`, action.rate);
      return Object.assign({}, state, nextState);
    default:
      return state;
  }
}