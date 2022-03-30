import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';

ReactDOM.render(
  <React.StrictMode>
    <div className='vh-100 pt-5 w-100 bg-dark d-flex justify-content-center'>
      <Card/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
