import Accueil from './components/Acueil/Accueil';
import Apropos from './components/Acueil/Apropos/Apropos';
import Experience from './components/Acueil/Apropos/Experience';
import AnimatedText from './components/AnimatedText';
import Competences from './components/Competences/Competences';
import CompetencesTransversales from './components/CompetencesTransversales/CompetencesTransversales';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import ProjetsRealises from './components/ProjetsRealises/ProjetsRealises';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main>
        {/* Section Accueil */}
        <Accueil />

        {/* Section À propos */}
        <Apropos />

        {/* Section Expérience */}
        <Experience />

        {/* Section Compétences */}
        <Competences />
        
        {/* CompetencesTransversales */}
        <CompetencesTransversales />

        {/* Section Projets */}
        <ProjetsRealises />

        {/* Section Contact */}
        <Contact />

        <Footer />
      </main>
    </div>
  );
};

export default App;