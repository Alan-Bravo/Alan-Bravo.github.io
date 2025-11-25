'use client';

import { Box, Typography, Container, Card, CardContent } from '@mui/material';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

const education: EducationItem[] = [
  {
    degree: 'Ingeniería en Sistemas',
    institution: 'Universidad Tecnológica Nacional',
    period: '2025 - En Curso',
    description: 'Grado universitario en Ingeniería en Sistemas de Información.',
  },
  {
    degree: 'Curso de Desarrollo de Aplicaciones Móviles',
    institution: 'ComunidadIT',
    period: 'Febrero 2020 - Mayo 2020',
    description: 'Desarrollo de aplicaciones móviles con HTML, CSS, JavaScript y PhoneGap.',
  },
];

export default function Education() {
  return (
    <Box
      id="education"
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
          Estudios
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {education.map((edu, index) => (
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
                  {edu.degree}
                </Typography>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{ color: '#666', mb: 1 }}
                >
                  {edu.institution}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#999', mb: 2, fontStyle: 'italic' }}
                >
                  {edu.period}
                </Typography>
                {edu.description && (
                  <Typography variant="body1" sx={{ color: '#333' }}>
                    {edu.description}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

