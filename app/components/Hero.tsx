'use client';

import { Box, Typography, Container } from '@mui/material';

export default function Hero() {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 10,
        pb: 8,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            p: 6,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#1976d2',
              mb: 2,
            }}
          >
            Alan Gonzalo Bravo
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              color: '#666',
              mb: 4,
              fontWeight: 500,
            }}
          >
            Front end Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#333',
              lineHeight: 1.8,
              fontSize: '1.1rem',
            }}
          >
            ¡Hola! Mucho gusto, me presento:
            Soy un Front-end developer con experiencia en ecommerce. Con pasión por el
            trabajo en equipo y el aprendizaje continuo. Busco nuevos desafíos
            que me ayuden a ampliar mis conocimientos para seguir creciendo como
            profesional.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

