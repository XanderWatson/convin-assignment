const initialState = {
  pages: 0,
  numUsers: 0,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        pages: action.data.total_pages,
        numUsers: action.data.total,
        users: state.users.concat(action.data.data),
      };
    case "ERROR":
      return { ...state, error: action.msg };
    default:
      return state;
  }
};

export default reducer;
