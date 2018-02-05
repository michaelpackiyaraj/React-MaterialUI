import React from 'react';
import {render} from 'react-dom';
import Routes from "./app/Routes";


// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<Routes />, document.getElementById('app'));
