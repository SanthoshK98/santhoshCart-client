import {Stack, TextField, Typography, Button, IconButton, Paper, CircularProgress, Backdrop, Link, Modal, Box, Card, CardContent} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import {useEffect, useState} from 'react'
import { Link as RouterLink,useNavigate, useLocation } from 'react-router-dom';
import cookie from 'react-cookies'
import { useLoginUserMutation } from '../features/products/productAPI';
import { baseUrl } from '../features/products/productAPI';

export const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [errMsg, setErrMsg] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState(false);
  const [loginUser, result] = useLoginUserMutation()
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location)
  const handleSubmit = async(e:any)=>{
    e.preventDefault()
    setLoading(true)
    try{
      let response: any = await fetch(`${baseUrl}signin`,{
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email,password})
      })
      response = await response.json()
      console.log(response)
      
      if(response?.token){
        cookie.save('token',response?.token,{ path: '/' })
        cookie.save('role',response?.role, { path: '/' })
        setLoading(false)
        navigate('/')
      }else{
        setLoading(false)
        setErrMsg(response.message)
        setModalOpen(true)
        
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <Stack spacing={2} alignItems="center">
      <Paper elevation={3} sx={{
        margin: "20px",
        padding: "20px",
        width:{
          sx:"90%",
          md:"40%"
        }
      }}>
        <Stack spacing={4} alignItems="center">
        <Typography variant='h5'>Login</Typography>
        <TextField label='Email' size='small' sx={{width:'75%'}} onChange={(e)=>setEmail(e.target.value)}/>
        <TextField label='Password' type='password' size='small' sx={{width:'75%'}} onChange={(e)=>setPassword(e.target.value)}/>
        
        <Stack direction='row' spacing={2}>
            <Button variant='contained' size='small'  onClick={handleSubmit}>Login</Button> 
            <Button variant='contained' size='small' startIcon={<GoogleIcon color='inherit'/>}>Login with Google</Button> 
            {/* <IconButton color='primary' aria-label='send'>
                <GoogleIcon/>
            </IconButton> */}
            <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
        </Stack>
        <Link component={RouterLink} to='/signup' underline="none"><Typography>Don't have account? Register</Typography></Link>
        </Stack>
      </Paper>  
      <Modal 
        open={modalOpen}
        onClose={()=>setModalOpen(false)}
      >
        <Box sx={{
          // width:{
          //   sx:'250px',
          //   md:'350px'
          // },
          width:'400',
          position: 'absolute',
          top: '50%',
          left: '35%',
          p:2
          }}>
          <Card elevation={8}>
            <CardContent>
            {/* <Typography variant="h5" component='h2' sx={{m:1}}>
            Not Authorised
          </Typography> */}
          <Typography>
            {errMsg}
          </Typography>
            </CardContent>
          </Card>
            
            
          
        </Box>
      </Modal>
    </Stack>
  )
}
