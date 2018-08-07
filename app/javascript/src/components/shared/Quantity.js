import React from 'react'

export default function Quantity({passClass, page, index, quantity}) {
  return (
    <div className={passClass}>
      <label className="quantity-label">Quantity:
        <input className="quantity-input"
               type="text"
               name="quantity"
               onChange={ (e) => page.onQuantityChange(index, e) }
               value={ quantity === 0 ? '' : quantity }
        />
      </label>
    </div>
  )
}