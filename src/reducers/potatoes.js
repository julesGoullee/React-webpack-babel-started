const potatoesData = require('../data/potatoes.json');

const potatoesDefaultState = potatoesData;

function potatoesReducer(state = potatoesDefaultState, action){

  switch(action.type){

  default:

    return state;

  }

}

export default potatoesReducer;
