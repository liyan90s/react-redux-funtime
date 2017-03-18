import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  var videoItems = props.videos.map((video) => {
    return <VideoListItem
            key={video.etag}
            onSelect={props.onSelect}
            video={video}
           />
  });

  return (
    <ul className="col-md-4">
      {videoItems}
    </ul>
  );
};

export default VideoList;
