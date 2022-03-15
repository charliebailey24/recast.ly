import VideoList from './VideoList.js';

// <div key={video.id.videoId}>{video.snippet.description}</div>

// sub-problem: how do we get VideoListEntry to understand what App's handleTitleClick method is?

var VideoListEntry = (props) => (
  // console.log('videoListEntry props: ', props);
  // props.video is the data we want to send to app
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div onClick={() => props.handleTitleClick(props.video)} className="video-list-entry-title">{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
