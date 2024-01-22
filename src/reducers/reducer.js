const initialState = {
    randomNumber: 0,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_RANDOM_NUMBER':
        return {
          ...state,
          randomNumber: state.randomNumber + action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  