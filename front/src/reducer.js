import { combineReducers } from 'redux';
 
const INITIAL_STATE = {
  id: "",
  pass: "",
  loading: false,
  loggedIn: "",
  name: "",
  image: "",
}
 
const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'signin_start':
      return { ...state, loading: true }
    case 'signin_end':
      return { ...state, loading: true }
    case 'signin_success':
      return { ...state, loggedIn: "ログイン中", name: action.payload.name, image: action.payload.image }

    case 'editProfile_start':
      return { ...state, loading: true }
    case 'editProfile_success':
      console.log(action.payload)
      return { ...state, name: action.payload.name, image: action.payload.image }

    default:
      return state;
  }
};
 
export default combineReducers({
  auth: AuthReducer
});