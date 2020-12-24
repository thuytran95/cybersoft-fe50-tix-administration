const initialState = {
  cloneTab: false,
};

const showAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLONE_TAB": {
      return {
        ...state,
        cloneTab: true,
      };
    }

    case "CLEAR_TAB": {
      return state;
    }

    default:
      return state;
  }
};

export default showAdminReducer;
