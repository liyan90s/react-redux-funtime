import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  var videoItems = props.videos.map((video) => {
    return <VideoListItem
            key={video.etag}
            video={video}
           />
  });

  return (
    <ul>
      {videoItems}
    </ul>
  );
};

export default VideoList;
