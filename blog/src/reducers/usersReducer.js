export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      // add new record
      return [...state, action.payload];
    default:
      return state;
  }
};
