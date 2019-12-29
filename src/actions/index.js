export const getShowingMovies = () => ({
  type: "GET_SHOWING_MOVIE"
});
export const getComingMovies = () => ({
  type: "GET_COMING_MOVIE"
});

export const getSelectedShowingMovie = id => ({
  type: "GET_SELECTED_SHOWING_MOVIE",
  id
});
export const getSelectedComingSoonMovie = id => ({
  type: "GET_SELECTED_COMING_SOON_MOVIE",
  id
});
