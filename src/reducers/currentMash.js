import { ADD_POTATOE } from '../actions/potatoes';

const currentMashDefaultState = [];

function currentMashReducer(state = currentMashDefaultState, action){

  switch(action.type){

  case ADD_POTATOE:

    return state.concat([action.payload]);

  default:

    return state;
  }

}

export default currentMashReducer;
