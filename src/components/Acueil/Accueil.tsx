import { motion, Variants } from 'framer-motion';
import profilePhoto from '../assets/images/profile.jpg'; // ajustez le chemin
import AnimatedText from '../AnimatedText';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Accueil = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center pt-16 pb-10 md:pt-20 lg:pt-28 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Partie Texte */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6" variants={itemVariants}>
              <span className="block text-gray-800 dark:text-gray-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Bonjour, je suis
              </span>
              <span className="block text-blue-600 dark:text-blue-400 mt-2 md:mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Valeurin NATREFINDRAZANA
              </span>
            </motion.h1>
            
            <motion.div className="my-6 md:my-8 lg:my-10" variants={itemVariants}>
              <AnimatedText />
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Développeur passionné avec une expertise en développement web moderne, 
              spécialisé dans la création d'applications performantes et intuitives.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start mt-8 md:mt-10" variants={itemVariants}>
              <motion.button 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 text-base md:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
              </motion.button>
              <motion.button 
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-200 text-base md:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Télécharger CV
              </motion.button>
            </motion.div>
          </div>

          {/* Partie Photo avec fond coloré */}
          <motion.div className="order-1 lg:order-2 flex justify-center lg:justify-end" variants={itemVariants}>
            <div className="relative">
              {/* Conteneur principal avec le fond gradient */}
              <motion.div 
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700 rounded-full flex items-center justify-center shadow-2xl p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Conteneur de la photo avec forme circulaire */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-inner">
                  <img 
                    src="Adobe Express - file.png" 
                    alt="Valeurin NATREFINDRAZANA - Développeur Fullstack"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Élément décoratif jaune (en haut à droite) - Animation de flottement */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-yellow-400 dark:bg-yellow-500 rounded-full opacity-80"
                animate={{ 
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Élément décoratif vert (en bas à gauche) - Animation de pulsation comme précédemment */}
              <motion.div 
                className="absolute -bottom-6 -left-6 w-16 h-16 md:w-20 md:h-20 bg-green-400 dark:bg-green-500 rounded-full opacity-70"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="hidden lg:flex justify-center mt-16 lg:mt-20"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, 10, 0]
          }}
          transition={{
            opacity: { delay: 2, duration: 0.8 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="w-8 h-14 border-4 border-blue-600 dark:border-blue-400 rounded-full flex justify-center p-2">
            <motion.div 
              className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
              animate={{
                y: [0, 20, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accueil;