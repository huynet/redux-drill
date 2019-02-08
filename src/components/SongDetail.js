import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
    return(
        <div style={{marginTop: '10px'}}>
            { props.selectedSong ? (
                <div>
                    Selected Song: {props.selectedSong.title}
                    <br/>
                    Duration: {props.selectedSong.duration}
                </div>
            ) : (
                <div>
                    No Selected Song.
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong }
};

export default connect(
    mapStateToProps
)(SongDetail)