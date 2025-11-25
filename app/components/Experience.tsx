'use client';

import { Box, Typography, Container, Card, CardContent } from '@mui/material';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Frontend Developer',
    company: 'Applica Solutions',
    period: 'Marzo 2025 - Noviembre 2025',
    description:
      'Desarrollo de e-commerce desde 0 con Laravel, Vue.js, Tailwind CSS, MySQL, Docker, Git/GitFlow. Trabajo en equipo con metodologías ágiles.',
  },
  {
    title: 'Software Engineer',
    company: 'Cencosud',
    period: 'Junio 2023 - Enero 2025',
    description:
      'Desarrollo de e-commerce con VTEX IO, React, Typescript, SASS, JQuery, GraphQL, Node.js.',
  },
  {
    title: 'Frontend Developer',
    company: 'Perfumerías Rouge',
    period: 'Enero 2023 - Junio 2023',
    description:
      'Desarrollo de e-commerce con VTEX IO, React, Typescript.',
  },
  {
    title: 'Frontend Developer',
    company: 'NEORIS',
    period: 'Septiembre 2022 - Enero 2023',
    description:
      'Desarrollo de e-commerce con VTEX IO, React, Typescript.',
  },
  {
    title: 'Frontend Developer',
    company: 'Fantommers',
    period: 'Mayo 2021 - Septiembre 2022',
    description:
      'Desarrollo de e-commerce con VTEX IO, React, Typescript. Web & Mobile.',
  },
];

export default function Experience() {
  return (
    <Box
      id="experience"
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
          Experiencia
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {exp.title}
                </Typography>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{ color: '#666', mb: 1 }}
                >
                  {exp.company}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#999', mb: 2, fontStyle: 'italic' }}
                >
                  {exp.period}
                </Typography>
                <Typography variant="body1" sx={{ color: '#333' }}>
                  {exp.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

