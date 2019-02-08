import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

// Class Component: this.props
// Func Component: (props) => { // props. only is enough}
class SongList extends Component {
    render() {
        const { songs } = this.props
        // this.props === { songs: state.songs }
        return(
            <div>
                <div>
                    <h2>There are {songs.length} songs in the playlist:</h2>
                </div>
                <div>
                    {songs.map((song, i) => {
                        return (
                        <div style={{marginBottom: '10px'}} key={i}>
                            <div>{i+1}{'. '}{song.title}{' '}{song.duration}</div>
                            <button onClick={() => this.props.selectSong(song)}>Select Song</button>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

// input: state
// output: props at class
const mapStateToProps = (state) => {
    // components will access via this.props.songs
    return {
        songs: state.songs,
        selectedSong: state.selectedSong
    };
}

// this shit is important
// why no dispatch
// connect functions => wraps all components => automatically call dispatch
export default connect(
    mapStateToProps, 
    { selectSong }
)(SongList);