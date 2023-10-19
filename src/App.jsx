import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './components/AppLayout'



import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"




const queryClient = new QueryClient({

  defauloptions: {
    queries: {
      staleTime: 60 * 1000
    }
  }
})



const App = () => {


  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout />}>

            <Route index element={<Navigate replace to='home' />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>



        </Routes>
      </BrowserRouter>

    </QueryClientProvider>
  )
}

export default App