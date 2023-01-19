import {Stack, TextField, Typography, Button, IconButton, Paper} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import cookie from 'react-cookies'

export const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
 
  const handleSubmit = async(e:any)=>{
    e.preventDefault()
    try{
      let response: any = await fetch('http://localhost:5000/loginUser',{
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email,password})
      })
      response = await response.json()
      console.log(response)
      cookie.save('token',response?.token)
      if(response?.status){

        navigate('/')
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
        </Stack>
        </Stack>
      </Paper>  
    </Stack>
  )
}
