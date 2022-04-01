import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';

ReactDOM.render(
  <React.StrictMode>
    <div className='w-full p-5'>
      <Card/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
