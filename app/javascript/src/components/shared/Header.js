import React, { Fragment } from 'react'


export default function Header({children}) {
  let list = []
  
  if (React.Children.count(children) < 2) {
    list[0] = children
  }
  else list = children
  
  return (
    <div className="header">
      <div className="header_logo">
        <h1 className="header_logo">VR Cardboard</h1>
      </div>
      
      <div className="header_nav">
          { list.map((child, index) => {
            if (!!child) {
              return (
                <div key={ index } className="header_nav-item">
                  { child }
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}