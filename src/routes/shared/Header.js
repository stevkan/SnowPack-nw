import React, { useState, useEffect } from 'react';

const Header = (/** @type {{ id: any, className: any, title?: any }} */ props) => {
  const [className, setHeaderClass] = useState(undefined)
  const [id, setHeaderId] = useState(undefined)
  const [title, setHeaderTitle] = useState(undefined)

  /**
   * @param {React.SetStateAction<undefined>} class
   * @param {React.SetStateAction<undefined>} id
   * @param {React.SetStateAction<undefined>} title
   */
  function handleClass(className) {
    setHeaderClass(className)
  }
  function handleId(id) {
    setHeaderId(id)
  }
  function handleTitle(title) {
    setHeaderTitle(title)
  }

  useEffect(() => {
    handleClass(props.className)
    handleId(props.id)
    handleTitle(props.title)
  });

  return <header id={id} className={className}>{title}</header>;
}

export default Header;
