import { Stack, Box, Typography, Breadcrumbs, Link, Grid, Backdrop, CircularProgress, Card, CardMedia, CardContent, CardActions, Button, Snackbar, Alert } from '@mui/material'
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import React, { useEffect, useState } from 'react'
import { useAddCartMutation, useCartQuery, useProductsQuery } from '../features/products/productAPI'

const Products = () => {
    const [open, setOpen] = useState(false)
    const [totalCart, setTotalCart] = useState(0)
    const [loading, setLoading] = useState(true)
  const {data =[], isLoading, isError, isFetching} = useProductsQuery()
  const {data: cartData, isLoading: cartLoading, isFetching: cartFetching} = useCartQuery()
  
  const [addCart, result] = useAddCartMutation()
//   console.log('Display Data',data)
  console.log(result)
  const handleClose = (e?: React.SyntheticEvent | Event, reason?: string )=>{
    if(reason === 'clickaway'){
      return
    }
    setOpen(false)
  }
  useEffect(() => {
    if(!isLoading){
      setLoading(false)
    }
  }, [isLoading])
  
  const handleCart = (item: any)=>{
    console.log(item)
    setLoading(true)
    addCart(item)
    if(cartFetching){
      
      
      setLoading(true)
    }else{
      setOpen(true)
      setLoading(false)
    }
  }
    const location: any = useLocation()
    console.log(location)
    const params = useParams()
  return (
    <Stack padding={2}>
        <Box m={2}>
    <Breadcrumbs maxItems={3} itemsBeforeCollapse={2} separator={<NavigateNextIcon fontSize='small'/>}>
            <Link component={RouterLink} underline="hover" to='/'>Home</Link>
            <Link component={RouterLink} underline="hover" to={`/products/${location.state?.prevParam}`}>Fashion</Link>
            {/* <Link underline="hover" href="#">Accessories</Link> */}
            <Typography color='text.primary'>{params.product}</Typography>
    </Breadcrumbs>
    </Box>
    <Grid container  rowSpacing={2} >
    
    {
      isLoading ? <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop> : isError ? <div>Something went wrong</div> : (data?.products.map((each)=>{
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
            <Button size="small" variant="contained" onClick={()=>handleCart(each)}>Add to Cart</Button>
            <Button size="small" variant="contained">Buy Now</Button>
          </CardActions>
        </Card>
      </Box>
      </Grid>
      })
      )
    }
     
    </Grid>
    <Snackbar
      autoHideDuration={6000}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical:'bottom',
        horizontal:'right'
      }}
    >
      <Alert variant='outlined' onClose={handleClose}>Added to Cart</Alert>
    </Snackbar>
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
    </Stack>
  )
}

export default Products