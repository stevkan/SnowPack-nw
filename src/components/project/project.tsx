import React from "react"
import { Formik } from "formik"

function buyApples( applesAmount: number ) {
  alert( `You have purchased ${ applesAmount } apples` )
}

export default function ProjectManger() {
  return (
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
  )
}