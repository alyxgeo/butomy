import React from 'react'

import { useQuery } from "@tanstack/react-query"
import { getProduct } from '../services/apiProducts'
import Spinner from '../components/Spinner'


import Card from '../components/Card'


const Home = () => {


  const { isLoading, data: products } = useQuery({
    queryKey: ['product'],
    queryFn: getProduct,
  })


  //console.log(products)


  if (isLoading) return <Spinner />


  return (
    <>
   


      <div className='flex flex-wrap'  >

        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}

      </div>

    </>

  )
}

export default Home