import React from 'react'
import Player from './Player';
import { Route, Link } from 'react-router-dom';

const SongList = (props) => {
  let list = props.songs.map((song)=> {
    let cn = "list-group-item";
    let playBtnStyle = { color:'white' };
    if (props.match.path + "/" + song.id === props.location.pathname) {
      cn += " active";
      playBtnStyle.color='black';
    }

    return (
      <li className={cn} key={song.id}>
        {song.title} ({song.musician})
        <span className="badge">
        <Link to={`/songs/${song.id}`}>
          <span className="glyphicon glyphicon-play-circle" style={playBtnStyle}/>
        </Link>
        </span>
      </li>
    )
  })
  
  return (
    <div>
        <h2>Song List</h2>
        <ul className="list-group">
          {list}
        </ul>
        <Route path={`${props.match.url}/:songid`}
          render={(props2)=> <Player {...props2} songs={props.songs} />} />
    </div>
  )
}

export default SongList;
