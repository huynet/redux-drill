import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component {
    render() {
        const { songs, selectedSong } = this.props
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
                <div style={{marginTop: '10px'}}>
                    { selectedSong ? (
                        <div>
                            Selected Song: {selectedSong.title}
                            <br/>
                            Duration: {selectedSong.duration}
                        </div>
                    ) : (
                        <div>
                            No Selected Song.
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // components will access via this.props.songs
    console.log(state)
    return {
        songs: state.songs,
        selectedSong: state.selectedSong
    };
}

// this shit is important
export default connect(mapStateToProps, { selectSong })(SongList);