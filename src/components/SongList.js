import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                    {songs.map(function (song, i) {
                        return (
                        <div key={i}>
                            <h3>{i+1}{'. '}{song.title}{' '}{song.duration}</h3>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps)(SongList);