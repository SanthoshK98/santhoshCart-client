import { Stack, Box, Breadcrumbs, Link, Typography, Grid, Card, CardMedia, CardContent} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
    const location = useLocation()
    const params = useParams()
    console.log(params)
    console.log(location)
  return (
    <Stack padding={2}>
            <Box m={2}>
    <Breadcrumbs maxItems={3} itemsBeforeCollapse={2} separator={<NavigateNextIcon fontSize='small'/>}>
            <Link component={RouterLink} underline="hover" to='/'>Home</Link>
            {/* <Link underline="hover" href="#">Fashion</Link> */}
            {/* <Link underline="hover" href="#">Accessories</Link> */}
            <Typography color='text.primary'>{params.category}</Typography>
    </Breadcrumbs>
    </Box>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={6} md={3} lg={3} xl={3}>
            <Link component={RouterLink} to={`/category/${'T-Shirts'}`} state={{prevParam : params.category}} underline='none'>
            <Box >
              <Card>
                <CardMedia 
                  component='img'
                  src='https://source.unsplash.com/random'
                  alt='Category-Image'
                />
                <CardContent>
                  <Typography variant='h5' component='div' gutterBottom>T-Shirts</Typography>
                </CardContent>
              </Card>
            </Box>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Box>
              <Card>
                <CardMedia 
                  component='img'
                  src='https://source.unsplash.com/random'
                  alt='Category-Image'
                />
                <CardContent>
                  <Typography variant='h5' component='div' gutterBottom>Shirts</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Box>
              <Card>
                <CardMedia 
                  component='img'
                  src='https://source.unsplash.com/random'
                  alt='Category-Image'
                />
                <CardContent>
                  <Typography variant='h5' component='div' gutterBottom>Jeans</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Box>
              <Card>
                <CardMedia 
                  component='img'
                  src='https://source.unsplash.com/random'
                  alt='Category-Image'
                />
                <CardContent>
                  <Typography variant='h5' component='div' gutterBottom>Shoes</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Box>
              <Card>
                <CardMedia 
                  component='img'
                  src='https://source.unsplash.com/random'
                  alt='Category-Image'
                />
                <CardContent>
                  <Typography variant='h5' component='div' gutterBottom>Casual Pants</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Box>
              <Card>
                <CardMedia 
                  component='img'
                  src='https://source.unsplash.com/random'
                  alt='Category-Image'
                />
                <CardContent>
                  <Typography variant='h5' component='div' gutterBottom>Traditional Wear</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Box>
              <Card>
                <CardMedia 
                  component='img'
                  src='https://source.unsplash.com/random'
                  alt='Category-Image'
                />
                <CardContent>
                  <Typography variant='h5' component='div' gutterBottom>Western Wear</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Box>
              <Card>
                <CardMedia 
                  component='img'
                  src='https://source.unsplash.com/random'
                  alt='Category-Image'
                />
                <CardContent>
                  <Typography variant='h5' component='div' gutterBottom>Inner Wear</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
    </Stack>
  )
}

export default Category