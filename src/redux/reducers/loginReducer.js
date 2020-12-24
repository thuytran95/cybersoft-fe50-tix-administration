const initialState = {
  username: "",
  password: "",
  helperText: "",
  isLogin: false,
  isError: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESSFUL": {
      return {
        ...state,
        isLogin: true,
        helperText: action.payload,
      };
    }

    case "LOGIN_FAILED": {
      return {
        ...state,
        isError: true,
        helperText: action.payload,
      };
    }

    case "LOGOUT": {
      return {
        ...state,
        isLogin: false,
        username: '',
        password: '',
        helperText: '',
      };
    }

    case "SET_USERNAME": {
      return {
        ...state,
        username: action.payload,
      };
    }

    case "SET_PASSWORD": {
      return {
        ...state,
        password: action.payload,
      };
    }

    default:
      return state;
  }
};

export default loginReducer;
