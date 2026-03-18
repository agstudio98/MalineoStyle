export default function Navbar({ onSectionChange, currentSection }: { onSectionChange: (section: 'home' | 'catalog' | 'support' | 'reserved') => void; currentSection: string; }) {
  return (
    <nav className="navbar">
      <div className="nav-logo logo-text">MalineoStyle</div>
      <ul className="nav-links">
        <li>
          <a 
            className={currentSection === 'home' ? 'active' : ''} 
            onClick={() => onSectionChange('home')}
          >
            Inicio
          </a>
        </li>
        <li>
          <a 
            className={currentSection === 'reserved' ? 'active' : ''} 
            onClick={() => onSectionChange('reserved')}
          >
            Reservar
          </a>
        </li>
      </ul>
    </nav>
  );
}

