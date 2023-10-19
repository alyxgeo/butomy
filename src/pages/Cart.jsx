import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Empty from '../components/Empty'
import { clearCart } from '../utils/cartSlice';
import CartItem from '../components/CartItem';



const Cart = () => {

  const dispatch = useDispatch();



  const cart = useSelector((state) => state.cart.cart)
  //console.log(cart)




  if (!cart.length) return <Empty />




  return (



    <div>

      <h2 className='mt-7 text-xl font-semibold'>Your cart</h2>

      <ul className='divide-y divide-stone-200 border-b mt-3'>
        {cart.map((item) => <CartItem item={item} key={item.id} />)}
      </ul>


      <div className='mt-6 space-x-2'>

        <button className="p-2 bg-slate-300 rounded" >Order Products 🛒</button>
        <button className="p-2 bg-slate-300 rounded"
          onClick={() => dispatch(clearCart())} >Clear cart 🗑️</button>

      </div>



    </div>
  )
}

export default Cart