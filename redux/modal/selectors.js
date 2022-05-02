export function selectState(state) {
  return state.modal;
}

export function selectIsOpen(state) {
  return selectState(state).isOpen;
}
