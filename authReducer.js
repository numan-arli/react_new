import { LOGIN_SUCCESS, LOGIN_FAIL,LOGOUT  } from "../actions/actionTypes";

const initialState = {
   token: null,
  isLoggedIn: false,
  user: null,
  error: null
};

export default function authReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    
    case LOGIN_SUCCESS:
      return {
        ...state,
         isLoggedIn: true,
        token: action.payload.token,
        user: { username: action.payload.username } ,
        error: null
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: action.payload,
         token: null,
      };
      case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        user: null,
        error: null
      };
    default:
      return state;
  }
}
