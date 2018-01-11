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
  switch (action.type) {
    case SET_LUNCH_RATE: {
      return Object.assign({}, state, {
        rate: { 
          ...state.rate,
          [action.id]: action.rate,
        },
      });
    }
    default:
      return state;
  }
}