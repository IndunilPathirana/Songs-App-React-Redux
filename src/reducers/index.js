import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Faded",
      duration: "3:45",
    },

    {
      title: "Alone",
      duration: "4:05",
    },
    {
      title: "Darkside",
      duration: "3:25",
    },

    {
      title: "On My Way",
      duration: "3:20",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
