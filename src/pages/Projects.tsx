import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

const MotionCard = motion(Card);

const projects = [
  {
    title: 'Modern Office Complex',
    category: 'Commercial',
    description:
      'A state-of-the-art office complex featuring sustainable design and smart building technology.',
    image: '/architect/projects/project1.jpg',
    details:
      'This 50,000 sq ft office complex was completed in 2022. The project features LEED Platinum certification, solar panels, and advanced building automation systems.',
  },
  {
    title: 'Luxury Residential Tower',
    category: 'Residential',
    description:
      'A 30-story luxury residential tower with panoramic views and premium amenities.',
    image: '/architect/projects/project2.jpg',
    details:
      'Completed in 2021, this residential tower offers 200 luxury units, a rooftop garden, fitness center, and 24/7 concierge service.',
  },
  {
    title: 'Apartment Complex',
    category: 'Infrastructure',
    description:
      'A major highway extension project improving regional connectivity.',
    image: '/architect/projects/project3.jpg',
    details:
      'This 10-mile highway extension project included the construction of three bridges and two interchanges, completed in 2023.',
  },
  {
    title: 'Shopping Mall Renovation',
    category: 'Commercial',
    description:
      'Complete renovation of a 20-year-old shopping mall with modern amenities.',
    image: '/architect/projects/project6.jpg',
    details:
      'The renovation project included structural upgrades, modern facade, and interior redesign, completed in 2022.',
  },
  {
    title: 'Smart Home Community',
    category: 'Residential',
    description:
      'A sustainable smart home community with integrated technology.',
    image: '/architect/projects/smarthome.jpg',
    details:
      'This 100-unit smart home community features solar power, smart home automation, and sustainable building materials.',
  },
  {
    title: 'Corporate Headquarters',
    category: 'Infrastructure',
    description:
      'State-of-the-art water treatment facility serving 500,000 residents.',
    image: '/architect/projects/project4.jpg',
    details:
      'The water treatment plant project included advanced filtration systems and automated monitoring technology.',
  },
];

const categories = ['All', 'Commercial', 'Residential', 'Infrastructure'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
            Our Projects
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.85 }}>
            Showcasing our excellence in construction
          </Typography>
        </Container>
      </Box>

      {/* Category Filter */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mb: 6 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              color={selectedCategory === category ? 'primary' : 'default'}
              sx={{
                cursor: 'pointer',
                px: 2,
                py: 1,
                fontWeight: 'bold',
                '&:hover': { bgcolor: 'primary.light', color: 'white' },
              }}
            />
          ))}
        </Box>

        {/* Projects Cards – using flex instead of Grid */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center',
          }}
        >
          {filteredProjects.map((project, index) => (
            <MotionCard
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 3,
                '&:hover': { boxShadow: 6 },
                width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={() => setSelectedProject(project)}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ height: 220, objectFit: 'cover' }}
                />
                <Chip
                  label={project.category}
                  color="primary"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    color: 'white',
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </MotionCard>
          ))}
        </Box>
      </Container>

      {/* Project Details Dialog */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3, p: 2 } }}
      >
        {selectedProject && (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5" fontWeight="bold">
                {selectedProject.title}
              </Typography>
              <IconButton onClick={() => setSelectedProject(null)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <DialogContent dividers>
              <Box
                component="img"
                src={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  mb: 3,
                  boxShadow: 2,
                }}
              />
              <Typography variant="body1" paragraph>
                {selectedProject.details}
              </Typography>
              <Chip label={selectedProject.category} color="primary" sx={{ fontWeight: 'bold' }} />
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;
