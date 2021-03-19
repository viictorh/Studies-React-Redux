//Actions creators
import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  //Obtem os posts e aguarda que sejam carregados para obter os usuarios
  await dispatch(fetchPosts());
  //Obtem os IDs unicos utilizando uniq e map do lodash. Com o map do lodash, é possivel extrair um elemento do objeto de maniera mais facil
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));

  //O CÓDIGO ACIMA É EQUIVALETE AO LODASH CHAIN ABAIXO:
  /**
   * _.chain(getState().posts).map('userId').uniq().forEach((id) => dispatch(fetchUser(id))).value();
   */
};

export const fetchPosts = () => async (dispatch /*, getState*/) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

//SOLUÇÃO USANDO MEMOISE DO LODASH PARA CARREGAMENTO DE USUARIOS APENAS UMA VEZ
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// /** o underscore no nome indica que eh um metodo privado e nao deve ser chamado por fora da classe */
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
