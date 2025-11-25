'use client';

import { Box, Typography, Container, Card, CardContent, Grid } from '@mui/material';
import { Icon } from '@iconify/react';
import Image from 'next/image';

interface Skill {
  name: string;
  icon: string;
  isImage?: boolean; // Indica si es una imagen local en lugar de un ícono de Iconify
}

const skills: Skill[] = [
  { name: 'React', icon: 'logos:react' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'jQuery', icon: 'skill-icons:jquery' },
  { name: 'HTML5', icon: 'logos:html-5' },
  { name: 'CSS3', icon: 'logos:css-3' },
  { name: 'SASS', icon: 'skill-icons:sass' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'VTEX IO', icon: '/VTEX.webp', isImage: true },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'Docker', icon: 'skill-icons:docker' },
  { name: 'GraphQL', icon: 'skill-icons:graphql-light' },
  { name: 'Material UI', icon: 'logos:material-ui' },
  { name: 'Laravel', icon: 'skill-icons:laravel-dark' },
  { name: 'SQL', icon: 'skill-icons:mysql-light' },
];

export default function Skills() {
  return (
    <Box
      id="skills"
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
          Skills
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
              <Card
                sx={{
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 2,
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  {skill.isImage ? (
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={48}
                      height={48}
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <Icon icon={skill.icon} width={48} height={48} />
                  )}
                  <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    {skill.name}
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

