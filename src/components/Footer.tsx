import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  IconButton,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    
    <section className="py-0 bg-gray-700 text-white text-center">
      <section className="py-5 bg-gray-700 text-white text-center"></section>
      <div>
        <div className="container mx-auto grid md:grid-cols-3 gap-8">          
          {/* Company Info */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom align="left">
              RCC Consultants & Architects.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }} align="left">
              Building excellence through innovation and dedication. 
              Your trusted partner in construction since 2006.
            </Typography>
          </Box>

          {/* Contact Info */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom align="left">
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }} align="left">
              OF 02,Second Floor, Facility Block,
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }} align="left">
              Sapana Garden, Chogm Rd, Porvorim,
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }} align="left">
              Goa - 403521
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }} align="left">
              Phone: +91 9960840933
            </Typography>
            <Typography variant="body2" align="left">
              Email: info@rccconsultant.co.in
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: 1, alignSelf: 'flex-start', textAlign: 'left' }}>
            <Typography variant="h6" gutterBottom align="left">
              Quick Links
            </Typography>
            <MuiLink
              component={RouterLink}
              to="/about"
              color="inherit"
              sx={{ display: 'block', mb: 1, alignSelf: 'auto' }}
            >
              About Us
            </MuiLink>
            <MuiLink
              component={RouterLink}
              to="/services"
              color="inherit"
              sx={{ display: 'block', mb: 1 }}
            >
              Services
            </MuiLink>
            <MuiLink
              component={RouterLink}
              to="/projects"
              color="inherit"
              sx={{ display: 'block', mb: 1 }}
            >
              Projects
            </MuiLink>
            <MuiLink
              component={RouterLink}
              to="/contact"
              color="inherit"
              sx={{ display: 'block' }}
            >
              Contact
            </MuiLink>
          </Box>
        </div>
      </div>
      <section className="py-5 bg-gray-700 text-white text-center"></section>
        <footer className="bg-gray-900 text-gray-300 py-3">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} RCC Consultants & Architects. All rights reserved.</p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </div>
          </div>
        </footer>
      
    </section>
  );
};

export default Footer; 