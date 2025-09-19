import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const services = [
  {
    title: 'Structural Design',
    description:
      'Developing structural and aesthetic designs, ensuring regulatory compliance and permits, selecting appropriate materials, and collaborating to create detailed construction documents and schedules.',
    image: '/architect/services/commercial.jpg',
    features: [
      'Conceptual Structural Design',
      'Structural Analysis & Load Calculations',
      'Element Design & Detailing',
      'Detailed Drawings & Specifications',
      'Material Selection & Optimization',
      'Code Compliance & Safety',
      'Retrofitting & Rehabilitation',
      'Construction Phase Support',
    ],
  },
  {
    title: 'Architectural Planning',
    description:
      'Architectural planning involves the design process phases, including pre-design, schematic design, design development, construction documents, bidding, and construction administration, alongside key planning elements like site analysis, program definition, budget, schedule, and client goals.',
    image: '/architect/services/residential.jpg',
    features: [
      'Define project scope and objectives',
      'Understand client needs and preferences',
      'Develop the initial concepts and sketches',
      'Refine the schematic design, including floor plans and elevations',
      'Create architectural drawings and 3D models',
    ],
  },
  {
    title: 'Project Supervision',
    description:
      'Supervise construction work to confirm adherence to the approved designs and specifications',
    image: '/architect/services/ProjectSupervision.jpg',
    features: [
      'Coordinate with all stakeholders',
      'Oversee the construction schedule',
      'Supervise construction work',
      'Quality Assurance',
    ],
  },
];

const Services = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'grey.900',
          color: 'white',
          py: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h5">
            Comprehensive RCC and Architectural solutions for every need
          </Typography>
        </Container>
      </Box>

      {/* Services List */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {services.map((service, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card sx={{ display: { xs: 'block', md: 'flex' } }}>
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    width: { xs: '100%', md: '40%' },
                    height: { xs: 240, md: 'auto' },
                  }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {service.description}
                  </Typography>
                  <List>
                    {service.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex}>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </MotionBox>
          ))}
        </Box>
      </Container>

      {/* CTA Section */}
      {/* Call to Action */}
      <section id="contact" className="py-10 bg-gray-900 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Let’s Build Your Dream Project</h3>
        <Button component={RouterLink}
                          to="/contact"
                          variant="contained"
                          color="secondary"
                          size="large"
                        >
                          Contact Us
          </Button>
      </section>
    </Box>
  );
};

export default Services;
