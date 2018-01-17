import React, { Component } from 'react';
import Youtube from "./Youtube";

class Player extends Component {

    bindYoutubeLink = (props) => {  
        let song = props.songs.find((song)=> {
            return song.id === parseInt(props.match.params.songid, 10);
        }); 
        if (song !== null) {
            this.currentLink = song.youtube_link;
        } else {
            this.currentLink = '';
        }
    }
    
    componentWillMount() {
        this.bindYoutubeLink(this.props);  
    }

    componentWillReceiveProps(nextProps) {
        this.bindYoutubeLink(nextProps);
    }
    
    render() {
        return (
            <div className="well">
                { this.currentLink !== "" ? 
                <Youtube video={this.currentLink} 
                    width="320" height="240"
                    autoplay="1" rel="1" modest="1" />     
                : '' }
            </div>
        )
    }
}

export default Player;