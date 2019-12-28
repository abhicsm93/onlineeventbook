const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return { ...state, loading: true };
    case "MOVIE_DATA":
      return { ...state, movie: action.json, loading: false };
    default:
      return state;
  }
};

export default reducer;
