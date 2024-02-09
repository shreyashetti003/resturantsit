import React from 'react';
import Layout from "./../components/layout/layout";
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,textAlign:"center",
        p:2,
        "& h4":{
          fontWeight:'bold',
          my:2,
          fontSize:"2em"
        },
        "& p":{
          textAlign:'justify',
        },
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:"1.5rem",
          }
        }
      }}>
        <Typography variant="h4">
          Welcome To "The Shetti's Resturant"
        </Typography >
        <p>
        Welcome to Shetti's Vegetarian Restaurant, where gastronomic innovation meets a symphony of flavors to redefine your dining experience. Nestled in the heart of culinary excellence, we take pride in crafting a menu that transcends the ordinary, offering a delightful fusion of global inspiration and local essence. Our commitment to vegetarian excellence is evident in each thoughtfully curated dish, where seasonal produce takes center stage, delivering freshness that tantalizes the senses. At Shetti's, we invite you to savor not just a meal, but an exploration of taste, texture, and creativity, all rooted in our dedication to providing a memorable and nourishing culinary journey for every guest. Welcome to a world where vegetarian dining is an art form – welcome to Shetti's.
          </p>
<br/>
<p>
The Shetti's Vegetarian Restaurant prioritizes freshness by sourcing locally grown, organic produce, ensuring a farm-to-table experience. With a commitment to sustainability, their eco-friendly practices extend to packaging, creating a guilt-free dining choice for environmentally conscious customers. The warm ambiance and attentive staff further enhance the overall dining pleasure, making it a cherished destination for those seeking a wholesome and enjoyable vegetarian culinary experience.
</p>
      </Box>
        <h1>About Page</h1>
    </Layout>
  );
};

export default About;