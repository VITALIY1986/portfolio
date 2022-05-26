import Contact from '@/components/Contact';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ProjectsDesigner from '@/components/ProjectsDesigner';
import Stack from '@/components/Stack';
import StackDesigner from '@/components/StackDesigner';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="google" content="notranslate"></meta>
        <meta property="og:image" content='/static/favicon/portf.png' key="ogimage" />
      </Head>
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-full content">
        <Hero />
        <div className="p-0 space-y-10">
        <Stack />
          <Projects />
          <StackDesigner />
         
          <ProjectsDesigner />
          <Contact />
        </div>
      </div>
    </>
  );
}
