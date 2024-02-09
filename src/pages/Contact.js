import React from 'react';
import Layout from "./../components/layout/layout";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
          <Typography>
            Contact "The Shetti's Resturant"
          </Typography>
          <p>
          We're more than just a restaurant; we're a place to gather, connect, and savor the good things in life. Whether you're a regular or a first-time guest, we want you to feel welcome and at ease. So pull up a chair, grab a menu, and let us tantalize your taste buds!
          In the meantime, stay connected with us on social media:
          Facebook Page Link:@shreyashetti]
[Instagram Page Link:@shreyashetti003]
[Twitter Page Link:@shreyashetti03]
P.S. Don't forget to sign up for our email list to receive exclusive offers and updates!
We hope this gives you a good starting point for your restaurant website's contact page. Feel free to adapt and add your own personal touch to make it truly your own.

Bonus Tip: Add a high-quality photo of your restaurant's interior or exterior to your contact page. This will help visitors get a feel for your atmosphere and make them even more excited to visit!
          </p>
        </Box>
        <Box sx={{m:3,width:"600px",ml:10,"@media (max-width:600px)":{
          width:"300px",
        },}}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:"black",color:"white",}}align="center">
Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                <SupportAgentIcon sx={{color:"red",pt:1}}/> 591313(trollfree)
                  </TableCell>
                  
                </TableRow>
                <TableRow>
                <TableCell>
                <EmailIcon sx={{color:"sky blue",pt:1}}/> help@mysres.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                <CallIcon sx={{color:"green",pt:1}}/> 9880846957
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  );
};

export default Contact;