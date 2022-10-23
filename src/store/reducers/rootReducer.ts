const reducer = (state, action) => {
  if (action === '') {
    return state + 1
  }
  else {
    return state;
  }
}