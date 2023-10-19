import React from 'react'

import { useDispatch, useSelector } from "react-redux";

import { addItem, deleteItem } from "../utils/cartSlice";

const Card = ({ product }) => {


    const { id, name, brand, image_link, price } = product;


    console.log(brand)



    const dispatch = useDispatch()

    const handleAddToCart = () => {
        //console.log(id)

        const newItem = {
            id,
            name,
            brand,
            price,
            quantity: 1,
            totalPrice: price * 1,
        }
        dispatch(addItem(newItem))
    }


    const currentQuantityById = useSelector((state) =>
        (state.cart.cart.find((item) => item.id === id)?.quantity ?? 0))

    //console.log(currentQuantityById)

    const isInCart = currentQuantityById > 0;
    //console.log(isInCart)






    return (

        <div className="bg-slate-50 m-3 h-[400px] w-[350px] rounded ">

            <div className="flex flex-col  items-center text-center gap-2 ">
                <img src={image_link} alt={name} className="h-[200px] w-[200px] mt-5 rounded" />
                <div>
                    <h4 className="uppercase font-medium">{brand}</h4>
                    <p>{name}</p>
                    <p className="font-semibold">price ${price}</p>


                    {!isInCart &&
                        <button className="bg-slate-300 mt-5 rounded p-2"
                            onClick={handleAddToCart}>add to cart</button>
                    }


                    {isInCart && <button className="bg-slate-300 mt-5 rounded p-2"
                        onClick={() => dispatch(deleteItem(id))}
                    >remove from cart</button>}



                </div>
            </div>
        </div>



    )
}

export default Card