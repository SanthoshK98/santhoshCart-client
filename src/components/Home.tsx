import { Stack, Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Grid, CircularProgress, Backdrop } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useProductsQuery } from "../features/products/productAPI"
// import { baseUrl } from "../features/products/productAPI"

export const Home = () => {
  const [loading, setLoading] = useState(true)
  const {data =[], isLoading, error} = useProductsQuery()
  console.log('Display Data',data)
  useEffect(() => {
    if(!isLoading){
      setLoading(false)
    }
  }, [isLoading])
  
  const handleCart = (item: any)=>{
      
  }
    const location = useLocation()
    console.log(location)

  return (
    <Stack padding={2}>
    <Grid container  rowSpacing={2} >
    
    {
      isLoading ? <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop> : error ? <div>Something went wrong</div> : (data?.products.map((each)=>{
        return <Grid item xs={12} sm={6} md ={3} lg={3} xl={3} >
        <Box sx={{
          width:{
            xs:'100%',
            sm:"90%",
            md:"90%"
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
            <Button size="small" variant="contained" onClick={(each)=>handleCart(each)}>Add to Cart</Button>
            <Button size="small" variant="contained">Buy Now</Button>
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
