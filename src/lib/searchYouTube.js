import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

// var endpoint = `https://app-hrsei-api.herokuapp.com/api/recastly/videos`;

// pass search function as prop to app

// i: searchYouTube function
// o: prop in App
// c: keep search youtube functional
// e: none




var searchYouTube = (query, successCB, errorCB = null) => {
  // i: string to search for in youtube
  // o: callback function that passes back array returned from api endpoint
  // c:
  // e: The server will return an empty array if no videos were stored AND the Youtube Api Key you passed in is out of requests for the day.

  // might need to use
  // https://app-hrsei-api.herokuapp.com/api/recastly/videos

  // sub-problem 1: how do we pass our query to youtube
  // sub-problem 2: where is this function called?
  console.log(query);

  // add field to put in youtube api key
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: { key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 8,
      type: 'video',
      videoEmbeddable: true },
    contentType: 'application/json',
    success: successCB,
    error: errorCB || function(error) {
      console.error('youtube: Failed to fetch messages', error);
    }
  });

};

// when should we make this request?

// sub-problem 2: pass search function as prop to app

export default searchYouTube;
