import {
  Stack,
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Grid,
  Backdrop,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Snackbar,
  Alert,
  IconButton,
  AlertTitle,
} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { Link as RouterLink, useLocation, useParams } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React, { useEffect, useState } from "react";
import {
  useAddCartMutation,
  useCartQuery,
  useProductsQuery,
} from "../features/products/productAPI";
import cookie from "react-cookies";
import Modal from "@mui/material/Modal";

const Products = () => {
  const auth = cookie.load("token");
  const [open, setOpen] = useState(false);
  const [openF, setOpenF] = useState(false);
  const [totalCart, setTotalCart] = useState(0);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const { data = [], isLoading, isError, isFetching } = useProductsQuery();
  const {
    data: cartData,
    isLoading: cartLoading,
    isFetching: cartFetching,
  } = useCartQuery();

  const [addCart, result] = useAddCartMutation();
    console.log('Result',result)
  console.log(useProductsQuery());
  const handleClose = (e?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpenF(false)
  };
  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
    }
  }, [isLoading]);

  const handleCart = (item: any) => {
    console.log(item);
    if (auth) {
      setLoading(true);
      addCart(item);
      if (result?.data?.error) {
        setLoading(false);
        setOpenF(true)
      } else {
        setLoading(false);
        setOpen(true);
        
      }
    } else {
      setModalOpen(true);
    }
  };
  const location: any = useLocation();
  console.log(location);
  const params = useParams();
  return (
    <Stack padding={2}>
      <Box m={2}>
        <Breadcrumbs
          maxItems={3}
          itemsBeforeCollapse={2}
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link component={RouterLink} underline="hover" to="/">
            Home
          </Link>
          <Link
            component={RouterLink}
            underline="hover"
            to={`/products/${location.state?.prevParam}`}
          >
            Fashion
          </Link>
          {/* <Link underline="hover" href="#">Accessories</Link> */}
          <Typography color="text.primary">{params.product}</Typography>
        </Breadcrumbs>
      </Box>
      <Grid container rowSpacing={2}>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : isError ? (
          <div>Something went wrong</div>
        ) : (
          data?.products.map((each) => {
            return (
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "90%",
                      md: "90%",
                    },
                  }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://source.unsplash.com/random"
                      alt="Random Img"
                    ></CardMedia>
                    <CardContent>
                      <Typography
                        variant="h5"
                        gutterBottom
                        component="div"
                        align="left"
                      >
                        {each.productItem}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="left"
                      >
                        {each.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleCart(each)}
                      >
                        Add to Cart
                      </Button>
                      <Button size="small" variant="contained">
                        Buy Now
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            );
          })
        )}
      </Grid>
      <Snackbar
        autoHideDuration={6000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert variant="filled" severity="success" onClose={handleClose}>
        <AlertTitle>Success</AlertTitle>
          Added to Cart
        </Alert>
      </Snackbar>
      <Snackbar
        autoHideDuration={6000}
        open={openF}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert variant="filled" severity="error" onClose={handleClose}>
          Failed to Add Cart
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Modal 
        open={modalOpen}
        onClose={()=>setModalOpen(false)}
      >
        <Box sx={{
          width:{
            sx:'250px',
            md:'350px'
          },
          // width:'500',
          position: 'absolute',
          top: '50%',
          left: '35%',
          p:2
          }}>
          <Card>
          <Stack direction='row' justifyContent='end' pr={2} mb={-2} pt={1}>
              <IconButton onClick={()=>setModalOpen(false)}>
                <ClearIcon/>
              </IconButton>
              </Stack>
            <CardContent>
            <Typography variant="h5" component='h2' sx={{m:1}} align='center'>
            Not Authorised
          </Typography>
          <Typography align='center'>
            Please Login to continue
          </Typography>
            </CardContent>
            {/* <CardActions sx={{border:'1px solid red'}}> */}
              <Stack direction='row' justifyContent='end' mr={2} mt={-1} pb={1}>
              <Link component={RouterLink} to='/login' underline="none"><Button>Login</Button></Link>
              
              </Stack>
              
            {/* </CardActions> */}
          </Card>
            
            
          
        </Box>
      </Modal>
    </Stack>
  );
};

export default React.memo(Products);
