import { useState, useEffect } from 'react';

export default function Navbar({ onSectionChange, currentSection }: { onSectionChange: (section: 'home' | 'catalog' | 'support' | 'reserved') => void; currentSection: string; }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (section: 'home' | 'catalog' | 'support' | 'reserved') => {
    onSectionChange(section);
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'nav-open' : ''}`}>
      <div className="nav-logo logo-text" onClick={() => handleLinkClick('home')} style={{ cursor: 'pointer' }}>
        MalineoStyle
      </div>

      {/* Hamburger Menu Button */}
      <button 
        className={`nav-toggle ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <a 
            className={currentSection === 'home' ? 'active' : ''} 
            onClick={() => handleLinkClick('home')}
          >
            Inicio
          </a>
        </li>
        <li>
          <a 
            className={currentSection === 'reserved' ? 'active' : ''} 
            onClick={() => handleLinkClick('reserved')}
          >
            Reservar
          </a>
        </li>
      </ul>
    </nav>
  );
}


