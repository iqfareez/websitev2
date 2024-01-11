'use client'
import React from 'react'
import Admon from 'react-admonitions'

function Admonition({ type, title, children }) {
  return (
    <Admon type={type} title={title}>
      {children}
    </Admon>
  )
}

export default Admonition
