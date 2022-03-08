// TODO: Render the `App` component to the DOM

// Need to run to compile file changes
// Find a way to make babel compile files as they are changed!

// npx babel . --watch --out-dir=compiled --presets=@babel/preset-react --ignore=node_modules,compiled --source-maps=inline

// "start": " <put the npx babel command to compile here> --watch" Add to package.json file

import App from './components/App.js';


// Inside of src/index.js, render the App component to the DOM and explore the codebase to get an understanding of each component's responsibility

ReactDOM.render(<App />, document.getElementById('app'));

