import {combineReducers} from 'redux'

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "All Star", duration: "3:45" },
    { title: " Wagyeme", duration: "4:30" },
    { title: "Me so nne3ma", duration: "4:05" },
    { title: "Hyebre Sesafo", duration: "4:00" },
    { title: "Ewurade na ay3", duration: "7:25" }
  ];
};

const selectedSongReducer = (selectSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectSong;
};

export default combineReducers({
    songs:songsReducer,
    selectSong:selectedSongReducer
})
