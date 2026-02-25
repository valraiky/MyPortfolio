import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  // Note : Heroicons ne fournit pas directement LinkedIn/GitHub, donc on utilisera des icônes génériques ou CSS
} from '@heroicons/react/24/outline';

const Footer = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="py-12 bg-blue-50 dark:bg-blue-900 border-b border-blue-200 dark:border-blue-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="p-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contactez-Moi
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">Téléphone</p>
                  <a href="tel:+261342474147" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    +261 34 24 741 47
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">Email</p>
                  <a href="mailto:valeurinpavart@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    valeurinpavart@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">Localisation</p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Fianarantsoa, Madagascar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Restons en contact */}
          <motion.div variants={itemVariants} className="p-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Restons en contact
            </h3>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                <span className="sr-only">LinkedIn</span>
                {/* Icône LinkedIn (remplacez par une vraie icône si possible, ex. via FontAwesome) */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.012-3.05-1.864-3.05-1.865 0-2.134 1.454-2.134 2.962v5.692h-3v-11h2.881v1.578h.041c.401-.76 1.381-1.864 2.841-1.864 3.034 0 3.6 1.996 3.6 4.592v6.694z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                <span className="sr-only">GitHub</span>
                {/* Icône GitHub (remplacez par une vraie icône si possible, ex. via FontAwesome) */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23 1.966-.545 4.072-.545 6.038 0 2.295-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.387 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* Ajoutez d'autres icônes si nécessaire, ex. Twitter, etc. */}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Vleurin NATREFINDRAZANA
          </p>
          <p className="text-blue-600 dark:text-blue-400 italic mb-4">
            Je suis disponible pour des appels et contacts à tout moment.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;