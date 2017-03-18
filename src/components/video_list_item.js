import React from 'react';

const VideoListItem = (props) => {
  return (
    <li className="list-group-item" onClick={() => props.onSelect(props.video)}>
      <div className="media">
        <div className="media-left">
          <img src={props.video.snippet.thumbnails.default.url} className="media-object" />
        </div>
        <div className="media-body">
          <p>{props.video.snippet.title}</p>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
