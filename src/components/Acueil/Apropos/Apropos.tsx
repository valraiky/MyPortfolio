import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ClockIcon, 
  PuzzlePieceIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';

const Apropos = () => {
  const stats = [
    { icon: ClockIcon, value: "En stage depuis 2022", label: "Années d'expérience" },
    { icon: CodeBracketIcon, value: "20+", label: "Projets réalisés" },
    { icon: PuzzlePieceIcon, value: "15+", label: "Technologies maîtrisées" },
    { icon: HeartIcon, value: "90%", label: "Satisfaction client" }
  ];

  return (
    <section id="apropos" className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
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
            À propos de moi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mon parcours, mes valeurs et ce qui me motive dans le développement 
            d'applications web modernes et innovantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Partie Texte - Mon histoire */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              Mon histoire
            </h3>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <p>
                Dès mon enfance, j'étais curieux de comprendre la logique derrière les technologies. 
                Cette curiosité m'a naturellement conduit vers les mathématiques avant de se transformer 
                en une véritable passion pour l'informatique au lycée.
              </p>

              <p>
                Actuellement passionné par l'informatique et la résolution de problèmes complexes, 
                j'ai approfondi mes compétences en développement web, DevOps et intelligence artificielle 
                à travers des projets académiques et professionnels concrets lors de mes études à 
                l'École Nationale d'Informatique.
              </p>

              <p>
                J'ai travaillé sur des projets variés : de la création d'applications web 
                (systèmes de gestion d'hôtel, cliniques, applications SaaS) à la mise en place 
                d'infrastructures CI/CD automatisées avec Docker, GitLab CI et Kubernetes.
              </p>

              <p>
                Aujourd'hui, je me spécialise dans le développement full-stack avec React, Express, 
                NestJS, Symfony, Python et d'autres technologies modernes, tout en explorant activement 
                l'univers du cloud et de l'infrastructure as code.
              </p>

              <p>
                En dehors du développement, j'aime expérimenter avec les outils réseau, contribuer à 
                des projets open source, animer des formations locales, et continuer d'apprendre chaque jour.
              </p>
            </div>
          </motion.div>

          {/* Partie Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 text-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Section supplémentaire - Compétences clés */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Mes domaines d'expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Développement Full-Stack",
                description: "Création d'applications web complètes avec les technologies modernes",
                color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
              },
              {
                title: "DevOps & Cloud",
                description: "Automatisation des déploiements et gestion d'infrastructure cloud",
                color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
              },
              {
                title: "IA & Data Science",
                description: "Exploration de données et implémentation de solutions d'intelligence artificielle",
                color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400"
              }
            ].map((domain, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-12 h-12 rounded-lg ${domain.color} flex items-center justify-center mb-4`}>
                  <div className="w-6 h-6">•</div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {domain.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {domain.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Apropos;