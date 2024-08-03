import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import iphoneImage from "./iphone.png";

const Products: React.FC = () => {
  const items = [...Array(30)].map((_, i) => i + 1);
  return (
    <Grid container spacing={3}>
      {items.map((_, index) => {
        return (
          <Grid item xs={12} md={4} key={index}>
            <ProductCard />
          </Grid>
        );
      })}
    </Grid>
  );
};

// components
const ProductCard = () => {
  return (
    <Paper sx={{ ...productPaperStyles }}>
      <Stack justifyContent={"space-between"} sx={{ height: "100%" }}>
        <Box sx={{ ...imageWrapper }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={iphoneImage}
            alt=""
          />
        </Box>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          Apple iPhone 15 Pro (128 GB) - Blue Titanium
        </Typography>
        <Typography variant="body1">
          Fulfilled by Shop Now - FREE Shipping
        </Typography>
      </Stack>
    </Paper>
  );
};

// styles
const productPaperStyles: CSSProperties = {
  minHeight: "400px",
  height: "400px",
  cursor: "pointer",
};
const imageWrapper: CSSProperties = {
  minHeight: "250px",
  height: "250px",
};
export default Products;
