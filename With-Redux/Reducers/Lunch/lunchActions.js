import {
    SET_LUNCH_RATE,
} from './lunchTypes';

export function setLunchRate(id, rate) {
  return {
    type: SET_LUNCH_RATE,
    id,
    rate,
  };
}