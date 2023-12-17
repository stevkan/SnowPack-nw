import React from 'react';
import Header from '../shared/Header';

const Main = () => {
  return (
    <div>
      <Header id='homeHeaderBar' className='headerBar' />
      <div className="App-main">
        <p>
          Designed for <a
            className="fg-link"
            href="https://fantasygrounds.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fantasy Grounds Unity
          </a>.
        </p>
        <p>
          Welcome to Module Maker for Fantasy Grounds Unity! Using Module Maker allows you to create a fully featured Fantasy Grounds module easily and without hassle. No need to create in Fantasy Grounds, piece together elements in an IDE or other app, nor rely on your learning code in order to produce your valuable content
        </p>
        <p>
          Get <a
            className="fg-link"
            href="https://./Project.tsx"
            rel="noopener noreferrer"
          >
            Started
          </a>!
        </p>
      </div>

    </div>
  );
}

export default Main;
