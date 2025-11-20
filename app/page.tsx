import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import About from '@/components/About';
import Events from '@/components/Events';
import Speakers from '@/components/Speakers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroCarousel />
        <About />
        <Events />
        <Speakers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}