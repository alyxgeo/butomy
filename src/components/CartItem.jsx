import React from 'react'
import UpdateQuantity from './UpdateQuantity';

const CartItem = ({ item }) => {


    const { id, name, price, quantity, totalPrice } = item;

    return (
        <div>

            <li className="py-3 sm:flex sm:item-center sm:justify-between">

                <p className="mb-1 sm:mb-0">
                    {quantity}&times; {name}
                </p>

                <div className="flex items-center justify-between ">
                    <p className="text-sm font-bold mr-5">{totalPrice}</p>


                    <UpdateQuantity id={id} quantity={quantity} />

                </div>
            </li>


        </div>
    )
}

export default CartItem