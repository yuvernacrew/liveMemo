const initState = {
  lives: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_LIVE':
      return {
        ...state,
        lives: [...state, lives, action.live],
      };
    default:
      return state;
  }
};

export default reducer;
