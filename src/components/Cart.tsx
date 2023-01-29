import { Stack, Card, Box, Typography } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid/Grid"

export const Cart = () => {
  return (
    <Stack padding={2}>
      <Box sx={{
        width:{
          xs:'100%',
        }
      }}>
      <Card>
        <Box sx={{
          display:'flex',
          flexDirection: 'row',
          padding: 2
        }}>
          <Box width='25%' >
          <CardMedia 
            component='img'
            src="https://source.unsplash.com/random"
            height='150'
            alt='Hello Cart'
            sx={{
              borderRadius:2
            }}
          />
          </Box>
          <CardContent>
            <Typography>Price</Typography>
            <Typography>Quantity</Typography>
          </CardContent>
        </Box>
      </Card>
      </Box>
    </Stack>
  )
}

