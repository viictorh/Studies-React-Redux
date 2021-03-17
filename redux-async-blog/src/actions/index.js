//Actions creators
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch /*, getState*/) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

//NORMAL UTILIZAR. MESMO COM REACT THUNK, PODE-SE UTILIZAR OBJETOS NORMAIS COMO RETORNO
export const selectPost = () => {
  return { type: "SELECT_POST" };
};
