import { Stack, Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Grid } from "@mui/material"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useProductsQuery } from "../features/products/productAPI"
import { baseUrl } from "../features/products/productAPI"

export const Home = () => {
  const [items, setItems] = useState([
    {
      name:"React",
      image:"https://source.unsplash.com/random",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, error"
    },
    {
      name:"React",
      image:"https://source.unsplash.com/random",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, error"
    },
  ])
  const {data =[], isLoading, error} = useProductsQuery()
  console.log('Display Data',data)
    const location = useLocation()
    console.log(location)

  return (
    <Stack padding={2}>
    <Grid container rowSpacing={2} justifyContent="space-around">
    
    {
      isLoading ? <div>Loading ............</div> : (data?.products.map((each)=>{
        return <Grid item xs={12} sm={6} lg={3} xl={3} >
        <Box sx={{
          width:{
            xs:'100%',
            md:"300px"
          }
        }}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
            alt="Random Img"
          >
          </CardMedia>
          <CardContent>
            <Typography variant="h5" gutterBottom component="div" align="left">
              {each.productItem}
            </Typography>
            <Typography variant="body2" color='text.secondary' align="left">
            {each.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
            <Button size="small">Buy Now</Button>
          </CardActions>
        </Card>
      </Box>
      </Grid>
      })
      )
    }
     
    </Grid>
    
    
    </Stack>
  )
}
