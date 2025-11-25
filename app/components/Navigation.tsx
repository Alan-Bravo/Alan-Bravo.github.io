'use client';

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Estudios' },
  { id: 'contact', label: 'Datos de contacto' },
  { id: 'links', label: 'Links' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [elevation, setElevation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setElevation(window.scrollY > 10 ? 4 : 0);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    // Establecer el estado inicial
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={elevation}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        {sections.map((section) => (
          <Button
            key={section.id}
            onClick={() => handleClick(section.id)}
            sx={{
              color: activeSection === section.id ? '#1976d2' : '#666',
              fontWeight: activeSection === section.id ? 600 : 400,
              textTransform: 'none',
              fontSize: '0.9rem',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
              },
            }}
          >
            {section.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

