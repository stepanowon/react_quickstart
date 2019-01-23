import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { songs } from '../../routes'

class SongList extends Component {
    render() {
        let songlist = songs.map((song)=>{
            return (
                <li className="list-group-item" key={song.id}>
                    <Link to={'/songs/'+song.id}> {song.title}</Link>
                </li>
            )
        })

        return (
            <div>
                <h2>Song List</h2>
                <ul className="list-group">
                    {songlist}
                </ul>
            </div>
        );
    }
}

export default SongList;