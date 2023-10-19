import React from 'react'

import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from '../utils/cartSlice'



const UpdateQuantity = ({ id, quantity }) => {

    const dispatch = useDispatch()

    return (
        <div className="flex gpa-1 items-center md:gap-3">

            <button className="p-3 bg-slate-300 rounded "
                onClick={() => dispatch(decreaseItemQuantity(id))} >-</button>

            <span className="p-4 text-sm font-medium gap-2">{quantity}</span>

            <button className="p-3 bg-slate-300 rounded mr-5"
                onClick={() => dispatch(increaseItemQuantity(id))}>+</button>

        </div>
    )
}

export default UpdateQuantity