const init = {
  isAuthenticated: false,
  userToken: null,
  userInfo: {}
};

const user = (state = init, action) => {
  
  switch (action.type) {
    case 'SET_USER':
      const { user } = action;
      return user;
    case 'UPDATE_USER':
      return {
        ...state,
        userData: {
          ...state.userData,
          firstname: action.user?.firstname,
          lastname: action.user?.lastname,
          email: action.user?.email,
        }
      }
    case 'SIGN_OUT':
      return init;
    default:
      return state;
  }
};

export default user;