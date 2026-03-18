import { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './sections/home';
import Reserved from './sections/reserved';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState<'home' | 'catalog' | 'support' | 'reserved'>('home');
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const handleSectionChange = (section: 'home' | 'catalog' | 'support' | 'reserved') => {
    setCurrentSection(section);
    // Scroll to top for new section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll reveal observer
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [observerCallback, currentSection]);

  return (
    <>
      <Navbar onSectionChange={handleSectionChange} currentSection={currentSection} />
      <main ref={(el) => { if (el) sectionsRef.current[0] = el; }}>
        {currentSection === 'home' && <Home ref={(el: HTMLElement | null) => { if (el) sectionsRef.current[1] = el; }} />}
        {currentSection === 'reserved' && <Reserved ref={(el: HTMLElement | null) => { if (el) sectionsRef.current[2] = el; }} />}
        {/* Catalog/Support placeholders - extend as needed */}
        {currentSection === 'catalog' && (
          <section className="form-section" ref={(el: HTMLElement | null) => { if (el) sectionsRef.current[3] = el; }}>
            <h1>Catálogo Completo</h1>
            <p>Próximamente: Todos nuestros servicios detallados.</p>
          </section>
        )}
        {currentSection === 'support' && (
          <section className="form-section" ref={(el: HTMLElement | null) => { if (el) sectionsRef.current[4] = el; }}>
            <h1>Soporte / Chatbot</h1>
            <p>Chatbot integrado próximamente.</p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;

