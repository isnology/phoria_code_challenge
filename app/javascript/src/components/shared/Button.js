import React from 'react'

export default function Button({ children }) {
  return (
    <button className="btn btn--std">
      { children }
    </button>
  )
}