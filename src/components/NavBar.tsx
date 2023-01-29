import { AppBar, Button, IconButton, Typography, Toolbar, Stack, Link, Drawer, Box} from '@mui/material';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import {Link as RouterLink, useNavigate} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { useState, useEffect } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import cookie from 'react-cookies'
import Avatar from '@mui/material/Avatar';
import { useCartQuery, useUserQuery } from '../features/products/productAPI';

export const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const auth = cookie.load('token')
  console.log("Cookie",auth)
  const {data : userQuery, isLoading: queryLoading, isError: userError} = useUserQuery()
  const {data: cartQuery, isLoading: cartLoading, isError: cartError} = useCartQuery()
  // console.log('CART-QUERY',cartQuery)
  // console.log(cartError)
  // console.log(cartLoading)
  console.log('CART-QUERY',useCartQuery())
  console.log('USER-QUERY',useUserQuery())
  const navigate = useNavigate()
  const handleLogout = ()=>{
    
    cookie.remove('token',{ path: '/' })
    cookie.remove('role',{ path: '/' })
    setIsDrawerOpen(false)
    navigate('/login')
  }
  const LoadRTK = ()=>{
    useCartQuery()
    useUserQuery()
  }
  useEffect(()=>{
    // LoadRTK()
  },[])
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' color='inherit' edge='start' aria-label='logo'>
            <Link component={RouterLink} to='/' color="inherit" underline='none'>
                <Diversity1Icon/>
            </Link>   
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                FamilyCart
            </Typography>
            {
          auth ? (
            <Stack direction='row' alignItems="center" spacing={2} sx={{
              width: {
                xs:"90%",
                md:"50%",
              },
              display:{
                xs:"none",
                md:"flex"
              },
              // color:'#eeeee'
            }}>
                      <Link component={RouterLink} to='/' color="inherit" underline='none'><Button color='inherit'>Home</Button></Link>
                      <Link component={RouterLink} to='/myorders' color="inherit" underline='none'><Button color='inherit'>MyOrders</Button></Link>
                      <Link component={RouterLink} to='/cart' color="inherit" underline='none'>
                        <IconButton size='large'  color='inherit'>
                           { cartQuery?.cart?.length ? (<Badge badgeContent={cartQuery?.cart?.length} color='error'>
                            <ShoppingCartOutlinedIcon/>
                          </Badge>) : (
                            (<Badge badgeContent={'0'} color='error'>
                            <ShoppingCartOutlinedIcon/>
                          </Badge>)
                          )}
                        </IconButton>
                      </Link>
                      <Link component={RouterLink} to='/login' color="inherit" underline='none'><Button color='inherit' onClick={handleLogout}>Logout</Button></Link>
                      <IconButton size='large'>
                        {userError ? <Avatar src='broken.jpg'/> :<Avatar src={userQuery?.user?.userImg}/>}
                      </IconButton>
                  </Stack>
          ) : (
            <Stack direction='row' alignItems="center" spacing={2} sx={{
              width: {
                xs:"90%",
                md:"50%",
              },
              display:{
                xs:"none",
                md:"flex"
              },
              // color:'#eeeee'
            }}>
                      <Link component={RouterLink} to='/' state={{user:"Hello"}} color="inherit" underline='none'><Button color='inherit'>Home</Button></Link>
                      <Link component={RouterLink} to='/cart' color="inherit" underline='none'>
                        <IconButton size='large'  color='inherit'>
                          <Badge badgeContent={'0'} color='error'>
                            <ShoppingCartOutlinedIcon/>
                          </Badge>
                        </IconButton>
                      </Link>
                      <Link component={RouterLink} to='/login' color="inherit" underline='none'><Button color='inherit'>Login</Button></Link>
                      <Link component={RouterLink} to='/signup' color="inherit" underline='none'><Button color='inherit'>SignUp</Button></Link>
                  </Stack>
          )
        }

            <Stack spacing={2} direction='row'>
            <Link component={RouterLink} to='/cart' color="inherit" underline='none' sx={{
              display:{
                sx:'flex',
                md:'none'
              }
            }}>
                  <IconButton size='large'  color='inherit'>
                    {
                      auth ? (<Badge badgeContent={cartQuery?.cart?.length} color='error'>
                      <ShoppingCartOutlinedIcon/>
                    </Badge> ) :(
                      <Badge badgeContent={'0'} color='error'>
                      <ShoppingCartOutlinedIcon/>
                    </Badge>
                    )
                    }
                    
                  </IconButton>
            </Link>
            <IconButton size='large' edge='start' color='inherit' onClick={()=>setIsDrawerOpen(true)} sx={{
              display:{
                sx:'flex',
                md:'none'
              }
            }}>
              <MenuIcon/>
            </IconButton>
            </Stack>
            <Drawer open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
              {
                auth ? (
                  <Stack spacing={0.5} width="300px">
              <Link component={RouterLink} to='/' state={{user:"Hello"}}  sx={{background:'#4287f5', color:'white'}} underline='none' onClick={()=>setIsDrawerOpen(false)}><Button color='inherit' >Home</Button></Link>
                <Link component={RouterLink} to='/cart'  sx={{background:'#4287f5', color:'white'}} underline='none' onClick={()=>setIsDrawerOpen(false)}><Button color='inherit'>Cart</Button></Link>
                <Link component={RouterLink} to='/myorders'  sx={{background:'#4287f5', color:'white'}} underline='none' onClick={()=>setIsDrawerOpen(false)}><Button color='inherit'>MyOrders</Button></Link>
                <Link component={RouterLink} to='/login'  sx={{background:'#4287f5', color:'white'}} underline='none' onClick={handleLogout}><Button color='inherit'>LogOut</Button></Link>
              </Stack>
                ) : (
                  <Stack spacing={0.5} width="300px">
              <Link component={RouterLink} to='/' state={{user:"Hello"}}  sx={{background:'#4287f5', color:'white'}} underline='none' onClick={()=>setIsDrawerOpen(false)}><Button color='inherit' >Home</Button></Link>
                <Link component={RouterLink} to='/cart'  sx={{background:'#4287f5', color:'white'}} underline='none' onClick={()=>setIsDrawerOpen(false)}><Button color='inherit'>Cart</Button></Link>
                <Link component={RouterLink} to='/login'  sx={{background:'#4287f5', color:'white'}} underline='none' onClick={()=>setIsDrawerOpen(false)}><Button color='inherit'>Login</Button></Link>
                <Link component={RouterLink} to='/signup'  sx={{background:'#4287f5', color:'white'}} underline='none' onClick={()=>setIsDrawerOpen(false)}><Button color='inherit'>SignUp</Button></Link>
              </Stack>
                )
              }
            </Drawer>
        </Toolbar>
    </AppBar>
  )
}
