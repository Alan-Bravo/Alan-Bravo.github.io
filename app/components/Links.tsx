'use client';

import { Box, Typography, Container, Card, CardContent, Grid } from '@mui/material';
import { Icon } from '@iconify/react';

interface LinkItem {
  name: string;
  url: string;
  icon: string;
  download?: boolean;
  fileName?: string;
  isExternal?: boolean;
}

const links: LinkItem[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Alan-Bravo',
    icon: 'mdi:github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alangonzalobravo/',
    icon: 'mdi:linkedin',
  },
  {
    name: 'Descargar CV',
    url: 'https://drive.google.com/uc?export=download&id=1Hi5KJxFFcYBR9q7RqI8hAsRkUpU7tXDU',
    icon: 'mdi:file-document',
    download: true,
    fileName: 'CV-Alan-Bravo.pdf',
    isExternal: true,
  },
];

export default function Links() {
  return (
    <Box
      id="links"
      component="section"
      sx={{
        py: 10,
        backgroundColor: '#fafafa',
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
          Links
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {links.map((link, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                component="a"
                href={link.url}
                download={link.download && !link.isExternal ? link.fileName : undefined}
                target={link.download && !link.isExternal ? undefined : '_blank'}
                rel={link.download && !link.isExternal ? undefined : 'noopener noreferrer'}
                onClick={(e) => {
                  if (link.download && link.isExternal && link.url) {
                    e.preventDefault();
                    window.open(link.url, '_blank');
                  }
                }}
                sx={{
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  height: '100%',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
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
                  <Icon icon={link.icon} width={48} height={48} />
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ mt: 2, fontWeight: 600 }}
                  >
                    {link.name}
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

