import { combineReducers } from 'redux';

// Two reducers
const songsReducer = () => {
    return [
        { title: 'Salesfore Sales', duration: '4:05'},
        { title: 'Google Searches', duration: '2:53'},
        { title: 'Facebook Stalks', duration: '3:15'},
        { title: 'Tesla Teleports', duration: '4:22'},
        { title: 'Doordash Dashes', duration: '2:28'},
        { title: 'Uber Ushers', duration: '4:05'},
        { title: 'Lyft Lifts', duration: '3:05'},
        { title: 'Eventbrite Exchanges', duration: '4:43'},
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})