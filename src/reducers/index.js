const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SHOWING_MOVIE":
      return { ...state, loading: true };
    case "SHOWING_MOVIE_DATA":
      return { ...state, showing_movie: action.json, loading: false };
    case "GET_COMING_MOVIE":
      return { ...state, loading: true };
    case "COMING_MOVIE_DATA":
      return { ...state, coming_movie: action.json, loading: false };
    default:
      return state;
  }
};

export default reducer;
