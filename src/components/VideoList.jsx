// Pass exampleVideoData into the VideoList component
import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
// taking piece of data and making avaliable to use

var VideoList = (props) => {
  console.log('VideoList props', props.videos);
  // <div className="video-list">
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  // </div>

  // iterate over props using map
  // map each videoList entry to an h5 element
  // console.log('props.videos', props.videos);
  const videoEntry = props.videos;

  // The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:
  // console.log(videoEntry);
  // []
  const videoList = videoEntry.map((entry) =>
    // somehow inject videoListEntry here
    <VideoListEntry video={entry} handleTitleClick={props.handleTitleClick}/>
  );

  return (<div className='video-list'>{videoList}</div>);
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;