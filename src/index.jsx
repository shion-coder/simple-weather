import React from 'react';
import ReactDOM from 'react-dom';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'config/i18n';

import Root from 'config/root';

/* -------------------------------------------------------------------------- */

ReactDOM.render(<Root />, document.getElementById('root'));
