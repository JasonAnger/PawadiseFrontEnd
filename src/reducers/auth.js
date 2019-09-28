import { SET_CURRENT_USER, EDIT_PROFILE } from "../constants/ActionTypes";
import isEmpty from "lodash/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    case EDIT_PROFILE:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    default:
      return state;
  }
}
