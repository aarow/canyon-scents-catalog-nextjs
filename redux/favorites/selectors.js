export function selectFavorites(state) {
  return state.favorites;
}

export function selectIsFavorite(state, id) {
  return state.favorites.includes(id);
}
