import React from 'react';
import Header from '../shared/Header';

const Module = () => {
  return (
    <div>
      <Header id='moduleHeaderBar' className='headerBar' title={ 'Module' } />
      <p>
        Welcome to Module Maker for Fantasy Grounds Unity! Using Module Maker allows you to create a fully featured Fantasy Grounds module easily and without hassle. No need to create in Fantasy Grounds, piece together elements in an IDE or other app, nor rely on your learning code in order to produce your valuable content
      </p>
    </div>
  );
}

export default Module;
