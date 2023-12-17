import React from 'react';
import { Formik } from 'formik';
import Header from '../shared/Header';

function buyApples( applesAmount: number ) {
  alert( `You have purchased ${ applesAmount } apples` )
}

const ComponentEditor = () => {
  return (
    <div>
      <Header id='componentEditorHeaderBar' className='headerBar' title={ 'ComponentEditor' } />
      <div className="App-main">
        <p>
          Welcome to Module Maker for Fantasy Grounds Unity! Using Module Maker allows you to create a fully featured Fantasy Grounds module easily and without hassle. No need to create in Fantasy Grounds, piece together elements in an IDE or other app, nor rely on your learning code in order to produce your valuable content
        </p>
      <Formik
        initialValues={ {
          applesAmount: 0,
        } }
        onSubmit={ values => {
          buyApples( values.applesAmount )
        } }
      >
        { ( { handleChange, handleBlur, values, handleSubmit } ) => (
          <form onSubmit={ handleSubmit }>
            <label htmlFor="applesAmount">
              <span>Amount of apples:</span>
              <input
                name="applesAmount"
                type="number"
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.applesAmount }
                required
              />
            </label>
            <button type="submit">Buy apples</button>
          </form>
        ) }
      </Formik>
      </div>
    </div>
  );
}

export default ComponentEditor;
