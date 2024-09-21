import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={2}>
        {/* Example Product Card */}
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt="Product Image"
                height="140"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Product {index + 1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a product description.
                </Typography>
              </CardContent>
              <Button size="small">Buy Now</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
