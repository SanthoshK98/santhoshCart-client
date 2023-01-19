import { AppBar, Button, IconButton, Typography, Toolbar, Stack, Link, Drawer, Box} from '@mui/material';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import {Link as RouterLink} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react';

export const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' color='inherit' edge='start' aria-label='logo'>
                <Diversity1Icon/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                FamilyCart
            </Typography>
            <Stack direction='row' spacing={2} sx={{
        width: {
          xs:"90%",
          lg:"75%",
        },
        display:{
          xs:"none",
          md:"flex"
        },
        border: "1px solid red",
        // color:'#eeeee'
      }}>
                <Link component={RouterLink} to='/' state={{user:"Hello"}} color="inherit" underline='none'><Button color='inherit'>Home</Button></Link>
                <Link component={RouterLink} to='/cart' color="inherit" underline='none'><Button color='inherit'>Cart</Button></Link>
                <Link component={RouterLink} to='/myorders' color="inherit" underline='none'><Button color='inherit'>MyOrders</Button></Link>
                <Link component={RouterLink} to='/login' color="inherit" underline='none'><Button color='inherit'>Login</Button></Link>
                <Link component={RouterLink} to='/signup' color="inherit" underline='none'><Button color='inherit'>SignUp</Button></Link>
            </Stack>
            <IconButton size='large' edge='start' color='inherit' onClick={()=>setIsDrawerOpen(true)} sx={{
              display:{
                sx:'flex',
                md:'none'
              }
            }}>
              <MenuIcon/>
            </IconButton>
            <Drawer open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
              <Stack spacing={0.5} width="300px">
              <Link component={RouterLink} to='/' state={{user:"Hello"}}  sx={{background:'#4287f5', color:'white'}} underline='none'><Button color='inherit'>Home</Button></Link>
                <Link component={RouterLink} to='/cart'  sx={{background:'#4287f5', color:'white'}} underline='none'><Button color='inherit'>Cart</Button></Link>
                <Link component={RouterLink} to='/myorders'  sx={{background:'#4287f5', color:'white'}} underline='none'><Button color='inherit'>MyOrders</Button></Link>
                <Link component={RouterLink} to='/login'  sx={{background:'#4287f5', color:'white'}} underline='none'><Button color='inherit'>Login</Button></Link>
                <Link component={RouterLink} to='/signup'  sx={{background:'#4287f5', color:'white'}} underline='none'><Button color='inherit'>SignUp</Button></Link>
              </Stack>
            </Drawer>
        </Toolbar>
    </AppBar>
  )
}
