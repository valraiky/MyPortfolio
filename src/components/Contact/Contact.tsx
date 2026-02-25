import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  UserIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
    <section id="contact" className="min-h-screen pt-32 pb-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez-Moi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Je suis disponible pour discuter de vos projets ou collaborations à tout moment. Contactez-moi par téléphone, email ou via le formulaire ci-dessous.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div 
            variants={itemVariants} 
            className="p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Mes Coordonnées
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-200 dark:border-blue-800 shadow-md dark:shadow-blue-900/50">
                <PhoneIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">Téléphone</p>
                  <a href="tel:+261342474147" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    +261 34 24 741 47
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-200 dark:border-blue-800 shadow-md dark:shadow-blue-900/50">
                <EnvelopeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">Email</p>
                  <a href="mailto:valeurinpavart@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    valeurinpavart@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-200 dark:border-blue-800 shadow-md dark:shadow-blue-900/50">
                <MapPinIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">Localisation</p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Fianarantsoa, Madagascar
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-blue-600 dark:text-blue-400 italic">
              Je suis disponible pour des appels et contacts à tout moment.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants} 
            className="p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envoyez-moi un message
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nom complet
                </label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="block w-full pl-10 pr-3 py-2 border border-blue-300 dark:border-blue-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Votre nom"
                  />
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <div className="mt-1 relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full pl-10 pr-3 py-2 border border-blue-300 dark:border-blue-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Votre email"
                  />
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Sujet
                </label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="block w-full pl-10 pr-3 py-2 border border-blue-300 dark:border-blue-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Sujet de votre message"
                  />
                  <ChatBubbleLeftIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full px-3 py-2 border border-blue-300 dark:border-blue-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Votre message"
                  ></textarea>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
              >
                Envoyer
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;