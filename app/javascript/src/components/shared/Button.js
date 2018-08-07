import React from 'react'

export default function Button({ children , onClick }) {
  return (
    <button className="btn btn--std" onClick={onClick}>
      { children }
    </button>
  )
}