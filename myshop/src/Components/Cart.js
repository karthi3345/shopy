import { useState } from "react"
import React from 'react'

const Cart = ({cart, setCart}) => {
    const[price, setPrice]=useState(0);
  return (
  <div>
    {
             cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                    <button>+</button>
                    <button>-</button>
                </div>
                <span>{item.price}</span>
                <button>Remove</button>

            </div>
   ))}
    <span> Total    Price of your cart</span>
    <span>Rs={price}</span>
  </div>
  )
}

export default Cart
