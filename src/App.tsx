import Accueil from './components/Acueil/Accueil';
import Apropos from './components/Acueil/Apropos/Apropos';
import AnimatedText from './components/AnimatedText';
import Header from './components/Header';

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
        <section id="experience" className="min-h-screen pt-20">
          <div className="max-w-[1500px] mx-auto p-6">
            <h2 className="text-3xl font-bold">Expérience</h2>
            {/* Votre contenu expérience */}
          </div>
        </section>

        {/* Section Compétences */}
        <section id="competences" className="min-h-screen pt-20">
          <div className="max-w-[1500px] mx-auto p-6">
            <h2 className="text-3xl font-bold">Compétences</h2>
            {/* Votre contenu compétences */}
          </div>
        </section>

        {/* Section Projets */}
        <section id="projets" className="min-h-screen pt-20">
          <div className="max-w-[1500px] mx-auto p-6">
            <h2 className="text-3xl font-bold">Projets</h2>
            {/* Votre contenu projets */}
          </div>
        </section>

        {/* Section Contact */}
        <section id="contact" className="min-h-screen pt-20">
          <div className="max-w-[1500px] mx-auto p-6">
            <h2 className="text-3xl font-bold">Contact</h2>
            {/* Votre contenu contact */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;