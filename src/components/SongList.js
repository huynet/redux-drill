import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        const { songs } = this.props
        // this.props === { songs: state.songs }
        return(
            <div>{songs.length}</div>
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