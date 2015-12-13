'use strict';

import polyfill from 'babel/polyfill';
import React from 'react';
import {Main, Trac} from './components/main';


React.render(React.createElement(Main), document.getElementById('app'));
React.render(React.createElement(Trac, {source: "http://localhost:8080/trac/SampleProject/report/10?asc=1&format=csv&REPORTER=admin"}), document.getElementById('trac'))