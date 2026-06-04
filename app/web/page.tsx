'use client';

import { NavBar } from '@/app/web/layout/navbar';
import { Footer } from '@/app/web/layout/footer';
import { Projects } from '@/app/web/components/propject';
import { AboutMe } from '@/app/web/components/aboutMe';
import { Skills } from '@/app/web/components/skills';
import { Contact } from '@/app/web/components/contact';

export default function Home() {
  return (
    <main>
      <NavBar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
