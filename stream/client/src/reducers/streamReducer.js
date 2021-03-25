import {
  CREATE_STREM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

import _ from "lodash";

export default (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, "id") };
    case CREATE_STREM:
    case EDIT_STREAM:
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      return _.omit(state, payload);
    default:
      return state;
  }
};
