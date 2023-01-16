import { Stack } from "@mui/material"
import { useLocation } from "react-router-dom"
import { useProductsQuery } from "../features/products/productAPI"

export const Home = () => {
  const {data, isLoading, error} = useProductsQuery()
  console.log('Display Data',data)
    const location = useLocation()
    console.log(location)
  return (
    <div>Home</div>
  )
}
