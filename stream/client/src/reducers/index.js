import { combineReducers } from "redux";
import authReducer from "./authReducer";
//Renomeando a variavel reducer para form reducer
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
