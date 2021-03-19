//Actions creators
import jsonPlaceholder from "../apis/jsonPlaceholder";
//por padrao, lodash utiliza _ como nome.
import _ from "lodash";

export const fetchPosts = () => async (dispatch /*, getState*/) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

/** o underscore no nome indica que eh um metodo privado e nao deve ser chamado por fora da classe */
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
