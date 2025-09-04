import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'accueil', name: 'Accueil' },
    { id: 'apropos', name: 'A propos' },
    { id: 'experience', name: 'Expérience' },
    { id: 'competences', name: 'Compétences' },
    { id: 'projets', name: 'Projets' },
    { id: 'contact', name: 'Contact' }
  ];

  // Détection de la section visible
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-50 p-4 border-b border-blue-200 dark:border-blue-700 sticky top-0 z-50">
      <div className="max-w-[1500px] mx-auto flex justify-between items-center">
        {/* Logo avec lien vers l'accueil */}
        <button
          onClick={() => scrollToSection('accueil')}
          className="h-12 w-12 bg-white flex justify-center items-center rounded-full shadow-md hover:scale-105 transition-transform cursor-pointer"
        >
          <p className="text-lg font-bold">
            <span className='dark:text-blue-900 text-black'>V</span>
            <span className='dark:text-black text-blue-900'>N</span>
          </p>
        </button>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative px-2 py-1 transition-all duration-200 hover:text-blue-700 dark:hover:text-blue-200 ${
                activeSection === section.id
                  ? 'text-blue-900 dark:text-blue-100 font-semibold'
                  : 'text-blue-600 dark:text-blue-300'
              }`}
            >
              {section.name}
              {activeSection === section.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 dark:bg-blue-100 rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Menu Mobile Burger */}
        <button
          className="md:hidden p-2 rounded-lg bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-blue-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu mobile"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Theme Toggle (visible sur desktop) */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-blue-50 dark:bg-blue-900 border-b border-blue-200 dark:border-blue-700 md:hidden z-50">
            <nav className="p-4 space-y-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-blue-900 dark:bg-blue-100 text-white dark:text-blue-900 font-semibold'
                      : 'text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800'
                  }`}
                >
                  {section.name}
                </button>
              ))}
              <div className="pt-4 border-t border-blue-200 dark:border-blue-700">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;