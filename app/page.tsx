'use client';

import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Links from './components/Links';

const Navigation = dynamic(() => import('./components/Navigation'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Links />
    </>
  );
}
