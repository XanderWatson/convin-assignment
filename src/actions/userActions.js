export const fetchUsers = (pageNum) => {
  return (dispatch) => {
    return fetch(`https://reqres.in/api/users?page=${pageNum}`)
      .then((response) => response.json())
      .then((json) => dispatch({ type: "FETCH_USERS", data: json }));
  };
};
