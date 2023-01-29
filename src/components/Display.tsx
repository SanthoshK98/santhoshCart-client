import { Autocomplete, Box, Card, CardContent, CardMedia, Grid, InputAdornment, Breadcrumbs, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useCartQuery, useUserQuery } from '../features/products/productAPI';

const Display = () => {
    const {data : userQuery, isLoading: queryLoading, isError: userError} = useUserQuery()
    const {data: cartQuery, isLoading: cartLoading, isError: cartError} = useCartQuery()
    const location = useLocation()
    // console.log(location)
    console.log('HOME_CART',useCartQuery())
    console.log('HOME_USER',useUserQuery())
  return (
    <Stack spacing={2} padding={2} border='2px solid blue'>
    
        <TextField
            size='small'
            placeholder='Search.....'
            InputProps={{
                startAdornment: <InputAdornment position='start'><SearchIcon/></InputAdornment>
            }}
        />
        <Grid container rowSpacing={2}>
            
            <Grid item lg={4} md={6} sm={6} xs={12}>
            <Link component={RouterLink} to={`/products/${'Fashion'}`} underline='none'>
                <Box sx={{
                    width: {
                        xs:'100%',
                        sm:'90%',
                        md:'90%',
                        lg:'90%'
                    }
                }}>
                    <Card>
                        <CardMedia 
                            component='img' 
                            height='200' 
                            src='https://source.unsplash.com/random'
                            alt='Random-Img'
                        />
                        <CardContent>
                            <Typography variant='h5' component='div' gutterBottom>Fashion</Typography>
                        </CardContent>
                    </Card>
                </Box>
                </Link>
            </Grid>
            
            <Grid item lg={4} md={6} sm={6} xs={12}>
                <Box sx={{
                    width: {
                        xs:'100%',
                        sm:'90%',
                        md:'90%',
                        lg:'90%'
                    }
                }}>
                    <Card>
                        <CardMedia 
                            component='img' 
                            height='200' 
                            src='https://source.unsplash.com/random'
                            alt='Random-Img'
                        />
                        <CardContent>
                            <Typography variant='h5' component='div' gutterBottom>Fashion</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
                <Box sx={{
                    width: {
                        xs:'100%',
                        sm:'90%',
                        md:'90%',
                        lg:'90%'
                    }
                }}>
                    <Card>
                        <CardMedia 
                            component='img' 
                            height='200' 
                            src='https://source.unsplash.com/random'
                            alt='Random-Img'
                        />
                        <CardContent>
                            <Typography variant='h5' component='div' gutterBottom>Fashion</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
                <Box sx={{
                    width: {
                        xs:'100%',
                        sm:'90%',
                        md:'90%',
                        lg:'90%'
                    }
                }}>
                    <Card>
                        <CardMedia 
                            component='img' 
                            height='200' 
                            src='https://source.unsplash.com/random'
                            alt='Random-Img'
                        />
                        <CardContent>
                            <Typography variant='h5' component='div' gutterBottom>Fashion</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
                <Box sx={{
                    width: {
                        xs:'100%',
                        sm:'90%',
                        md:'90%',
                        lg:'90%'
                    }
                }}>
                    <Card>
                        <CardMedia 
                            component='img' 
                            height='200' 
                            src='https://source.unsplash.com/random'
                            alt='Random-Img'
                        />
                        <CardContent>
                            <Typography variant='h5' component='div' gutterBottom>Fashion</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
                <Box sx={{
                    width: {
                        xs:'100%',
                        sm:'90%',
                        md:'90%',
                        lg:'90%'
                    }
                }}>
                    <Card>
                        <CardMedia 
                            component='img' 
                            height='200' 
                            src='https://source.unsplash.com/random'
                            alt='Random-Img'
                        />
                        <CardContent>
                            <Typography variant='h5' component='div' gutterBottom>Fashion</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default Display