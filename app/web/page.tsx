'use client';

import { NavBar } from '@/app/web/layout/navbar';
import { Footer } from '@/app/web/layout/footer';
import { Projects } from '@/app/web/components/project';
import { AboutMe } from '@/app/web/components/aboutMe';
import { Skills } from '@/app/web/components/skills';
import { Contact } from '@/app/web/components/contact';
import { Experience } from '@/app/web/components/experience';

export default function Home() {
  return (
    <main>
      <NavBar />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
