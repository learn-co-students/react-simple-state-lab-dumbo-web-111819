import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.jsx'

ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));
