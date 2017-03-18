import React from 'react';

const VideoDetail = (props) => {
  if (!props.selectedVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={"http://www.youtube.com/embed/" + props.selectedVideo.id.videoId} allowFullScreen></iframe>
      </div>
      <div className='details'>
        <h6>{props.selectedVideo.snippet.description}</h6>
        <p>{props.selectedVideo.snippet.title}</p>
      </div>
    </div>
  );

}

export default VideoDetail;