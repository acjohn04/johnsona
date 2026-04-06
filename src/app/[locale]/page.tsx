import { TopAppBar } from '../../components/TopAppBar';
import { Hero } from '../../components/Hero';
import { About } from '../../components/About';
import { Skills } from '../../components/Skills';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';

export default function Home() {
  return (
    <>
      <TopAppBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
