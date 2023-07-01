import {
    Dialog,
    DialogTitle,
    Slide,
    Box,
    IconButton,
    DialogContent,
    Typography,
    Button,
   
  } from "@mui/material";
//   import { useRef } from "react";
  import CloseIcon from "@mui/icons-material/Close";
  import { Colors } from "../../styles/theme";
  import styled from "@emotion/styled";
  import {  Product, ProductImage } from "../../styles/Products";
//   import { BannerShopButton } from "../../styles/banner";
  import IncDec from "../ui/incdec";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import { useTheme } from "@mui/material/styles";
  import { useMediaQuery } from "@mui/material";
  
  function SlideTransition(props) {
    return <Slide direction="down" {...props} />;
  }
  
  const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(4),
  }));
  
  const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
  }));
  
  export default function ProductDetail({ open, onClose, product }) {
      const theme = useTheme();
      const matches = useMediaQuery(theme.breakpoints.down("md"));
    return (
      <Dialog
        TransitionComponent={SlideTransition}
        variant="permanant"
        open={open}
        fullScreen
      >
        <DialogTitle
          sx={{
            background: Colors.secondary,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent={"space-between"}
          >
            О продукте
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <ProductDetailWrapper display={"flex"} flexDirection={matches ? "column" : "row"}>
            <Product sx={{ mr: 4 }}>
              <ProductImage src={product.image} />
            </Product>
            <ProductDetailInfoWrapper>
              <Typography variant="subtitle">цена:{product.price}</Typography>
            <Typography variant="subtitle">{product.change}</Typography>
              <Typography variant="subtitle">размер:{product.size}</Typography>
              <Typography variant="subtitle">цвет:{product.color}</Typography>
              <Typography variant="subtitle">тел.для связи:{product.contact}</Typography>
              <Typography sx={{ lineHeight: 2 }} variant="h4">
                {product.name}
              </Typography>
              <Typography variant="body">
                {product.description}
                
              </Typography>
              <Box
                sx={{ mt: 4 }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <IncDec />
                <Button variant="contained">Добавить в корзину</Button>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{ mt: 4, color: Colors.light }}
              >
                <FavoriteIcon sx={{ mr: 2 }} />
                Добавить в понравившиеся
              </Box>
              <Box
                sx={{
                  mt: 4,
                  color: Colors.dove_gray,
                }}
              >
                <FacebookIcon />
                <TwitterIcon sx={{ pl: 2 }} />
                <InstagramIcon sx={{ pl: 2 }} />
              </Box>
            </ProductDetailInfoWrapper>
          </ProductDetailWrapper>
        </DialogContent>
      </Dialog>
    );
  }
  