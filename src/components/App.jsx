import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYoutube.js';
// need to access the video data

// Replace props with this.props in the render() body.

// State is similar to props, but it is private and fully controlled by the component.

// It will use this.setState() to schedule updates to the component local state:

/*   tick() {
    this.setState({
      date: new Date()
    });
  }
*/

// sub-problem 1: we need to pass state as props to children componenets, but DO NOT add state to any of the children components

// i: exampleVideoData
// o: transfer of state info to child component
// c: DO NOT add state to any of the children components
// e: if video data empty

// to get exampleVideoData to the child componenets

// pass in state information to video list


// sub-problem 2: repeat sub-problem 1 for VideoPlayer, have the video in video player display when title in video list entry is clicked

// i: click event on title
// o: clicked video is displayed in video player
// c: Do not add state to any of the functional components.
// e: what to do if first video is not the one clicked

// each video has unique id --> click should be able to change video in video player based on that click

// need event handler function for when title is clicked
var thisWorks = function() {
  console.log('its alive');
};

console.log(searchYouTube('dogs', thisWorks, () => { console.log('doesnt work'); }));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    };
    this.handleTitleClick = this.handleTitleClick.bind(this); // hint - similar to how we handle search?
    this.didMount = componentDidMount();

  }
  // pass into video player as props exampleVideoData with the video at the index of the clicked title

  handleTitleClick(videoObj) {
    // console.log('clickHandlerEvent: ', event);
    // sub-problem 4: store the infomation of the index number of the clicked exampleVideo. Store as a variable and pass to VideoPlayer in the render function below

    // sub-problem 5: get videoListEntry to understand what handleTitleClick is

    // get the video from exampleVideoData that correlates with info in event

    // set state.video

    // test test

    this.setState({
      video: videoObj
    });


  }
  // set state for searchYouTube

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} handleTitleClick={this.handleTitleClick}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
