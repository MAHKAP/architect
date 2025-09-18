import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SecurityIcon from '@mui/icons-material/Security';
import HandshakeIcon from '@mui/icons-material/Handshake';

const MotionBox = motion(Box);

const team = [
  { name: 'M. K. Naik', position: 'CEO & Founder', image: '/team/leader1.jpg' },
  { name: 'N. D. Godbole', position: 'CEO & Founder', image: '/team/leader2.jpg' },
  { name: 'Prashant Jawale', position: 'Project Manager', image: '/team/leader3.jpg' },
];

const values = [
  {
    title: 'Excellence',
    description:
      'We strive for excellence in every project. Continuous improvement and commitment to exceeding expectations.',
    icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Safety',
    description:
      'Safety is our top priority on every construction site. We ensure a safe environment for employees, customers, and the public.',
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Integrity',
    description:
      'We conduct our business with honesty and transparency, building trust through strong moral principles.',
    icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
  },
];

const About = () => {
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
            About Us
          </Typography>
          <Typography variant="h5">
            Building excellence through innovation and dedication
          </Typography>
        </Container>
      </Box>

      {/* Company Story */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
            alignItems: 'center',
          }}
        >
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ flex: 1 }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph>
              We are a team of expert RCC consultants and architects,
              delivering reliable structural designs and innovative solutions
              for residential, commercial, and industrial projects.
            </Typography>
            <Typography variant="body1" paragraph>
              With over 200 successful projects, we focus on quality,
              durability, and customer satisfaction.
            </Typography>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ flex: 1 }}
          >
            <Box
              component="img"
              src="/About.jpeg"
              alt="Company building"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </MotionBox>
        </Box>
      </Container>

      {/* Values Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Our Values
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              mt: 4,
            }}
          >
            {values.map((value, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                sx={{ flex: 1 }}
              >
                <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{value.icon}</Box>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Our Leadership Team
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            mt: 4,
          }}
        >
          {team.map((member, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              sx={{ flex: 1 }}
            >
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" component="h3" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {member.position}
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
