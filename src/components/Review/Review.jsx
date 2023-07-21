import React, { useEffect, useState } from 'react'
import { getStoredCart } from '../../utilities/fakedb';
const Review = () => {

  const [cart, setCart] = useState([]);

 useEffect(() => {
    const savedCart = getStoredCart();
    console.log(savedCart)
 }, [])
 

  return (
    <div>Review</div>
  )
}

export default Review