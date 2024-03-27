export const setUser = user => ({
  type: "SET_USER",
  user
});

export const updateUser = user => ({
  type: "UPDATE_USER",
  user
});

export const userSignOut = () => ({
  type: "SIGN_OUT"
});

export const signOut = () => async dispatch => {
  localStorage.clear()
  sessionStorage.clear()
  dispatch(userSignOut())
};