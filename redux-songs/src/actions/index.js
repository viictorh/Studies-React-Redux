//padrao de nome utilizado index.js

//Action creator
export const selectSong = (song) => {
  //Retorna uma ação
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
