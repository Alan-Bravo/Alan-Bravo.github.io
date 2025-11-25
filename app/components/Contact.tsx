'use client';

import { Box, Typography, Container, Card, CardContent, Grid } from '@mui/material';
import { Icon } from '@iconify/react';

interface ContactItem {
  label: string;
  value: string;
  icon: string;
  link?: string;
}

const contactInfo: ContactItem[] = [
  {
    label: 'Email',
    value: 'bravoalangonzalo@gmail.com',
    icon: 'mdi:email',
    link: 'mailto:bravoalangonzalo@gmail.com',
  },
  {
    label: 'Teléfono',
    value: '+54 341 2269-227',
    icon: 'mdi:phone',
    link: 'tel:+543412269227',
  },
  {
    label: 'Ubicación',
    value: 'Rosario, Santa Fe, Argentina',
    icon: 'mdi:map-marker',
  },
];

export default function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 10,
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#1976d2',
            mb: 6,
            textAlign: 'center',
          }}
        >
          Datos de Contacto
        </Typography>
        <Grid container spacing={3}>
          {contactInfo.map((contact, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <Card
                component={contact.link ? 'a' : 'div'}
                href={contact.link}
                target={contact.link?.startsWith('http') ? '_blank' : undefined}
                rel={
                  contact.link?.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                sx={{
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                  transition: 'transform 0.3s ease',
                  height: '100%',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Icon icon={contact.icon} width={40} height={40} />
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ mt: 2, mb: 1, fontWeight: 600 }}
                  >
                    {contact.label}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {contact.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

