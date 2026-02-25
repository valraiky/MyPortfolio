import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserGroupIcon, 
  ArrowsRightLeftIcon, 
  ChatBubbleLeftRightIcon, 
  PuzzlePieceIcon, 
  CalendarDaysIcon, 
  AcademicCapIcon 
} from '@heroicons/react/24/outline';

const CompetencesTransversales = () => {
  // ... (same data structure as above)
  const competences = [
    {
      icon: UserGroupIcon,
      title: "Leadership",
      description: "Capacité à diriger et motiver une équipe technique",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
    },
    {
      icon: ArrowsRightLeftIcon,
      title: "Adaptabilité",
      description: "Capacité à s'adapter rapidement aux nouvelles technologies",
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Communication",
      description: "Excellente communication avec les clients et les équipes",
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400"
    },
    {
      icon: PuzzlePieceIcon,
      title: "Résolution de problèmes",
      description: "Approche analytique pour résoudre les défis complexes",
      color: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400"
    },
    {
      icon: CalendarDaysIcon,
      title: "Gestion de projet",
      description: "Planification et exécution efficace des projets",
      color: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400"
    },
    {
      icon: AcademicCapIcon,
      title: "Apprentissage continu",
      description: "Passion pour l'apprentissage et l'amélioration continue",
      color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="competences-transversales" className="min-h-screen pt-32 pb-20 bg-white dark:bg-gray-900">
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
            Compétences Transversales
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mes compétences humaines et professionnelles qui complètent mon expertise technique
          </p>
        </motion.div>

        {/* Compétences Grid with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competences.map((competence, index) => {
            const IconComponent = competence.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full transform translate-x-16 -translate-y-16" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`w-14 h-14 rounded-xl ${competence.color} flex items-center justify-center mr-4 shadow-md`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {competence.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      {competence.description}
                    </p>
                    
                    {/* Animated underline on hover */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ces compétences me permettent de m'adapter à tous types de projets et environnements de travail
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Discutons de votre projet
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetencesTransversales;