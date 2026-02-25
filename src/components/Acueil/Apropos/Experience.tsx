import React from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingStorefrontIcon, 
  CalendarIcon, 
  MapPinIcon,
  AcademicCapIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const Experience = () => {
  const experiences = [
    {
      title: "Développeur Full-Stack & DevOps",
      company: "Origami Tech",
      period: "2022-2023 et Juillet 2024 - Novembre 2024",
      location: "Fianarantsoa",
      type: "Professionnel",
      description: [
        "Développement de plusieurs applications web et mobile",
        "Mise en place de CI/CD avec GitLab CI, Docker, Kubernetes",
        "Répartition de charge avec HAProxy, supervision via Prometheus et Grafana"
      ],
      technologies: [
        "React js", "Express js", "Nest js", "Vue js", "Symfony", 
        "React native", "Docker", "Kubernetes", "GitLab CI", 
        "HAProxy", "Prometheus", "Grafana"
      ]
    },
    {
      title: "Développeur Full-Stack & DevOps (Stage)",
      company: "Clinique Sofia Medicale",
      period: "Décembre 2024 - Février 2025",
      location: "Fianarantsoa",
      type: "Stage",
      description: [
        "Développement d'application web pour la gestion de clinique et gestion de scolarité",
        "Création de site web e-learning",
        "Mise en place de CI/CD avec GitLab CI, Docker, Kubernetes"
      ],
      technologies: [
        "React js", "Express js", "Tailwind CSS"
      ]
    }
  ];

  const formations = [
    {
      title: "Master en informatique",
      school: "École Nationale d'Informatique Fianarantsoa",
      period: "2024-2025",
      description: "Formation orientée en Administration de base de données et génie logiciel, et Administration de système et réseau"
    },
    {
      title: "Licence en mathématique mode présentielle",
      school: "École Normale Supérieure Fianarantsoa",
      period: "2025",
      description: "Diplôme Licence en mathématique"
    },
    {
      title: "Licence professionnelle informatique",
      school: "École Nationale d'Informatique",
      period: "2023-2024",
      description: "Diplôme de l'obtention de licence professionnelle informatique"
    },
    {
      title: "Baccalauréat Série scientifique (série C)",
      school: "Lycée Philibert Tsiranana",
      period: "2019",
      description: "Formation pour obtenir baccalauréat qui oriente beaucoup vers les mathématiques et la physique"
    }
  ];

  return (
    <section id="experience" className="min-h-screen pt-32 pb-20 bg-white dark:bg-gray-900">
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
            Expérience & Formation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mon parcours professionnel et académique dans le domaine du développement web et mobile
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Expériences Professionnelles */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <BuildingStorefrontIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Expérience Professionnelle
              </h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-blue-500 shadow-lg"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exp.type === "Professionnel" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <AcademicCapIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Formation
              </h3>
            </div>

            <div className="space-y-6">
              {formations.map((formation, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-purple-500 shadow-lg"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {formation.title}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">
                        {formation.school}
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm font-medium">
                      {formation.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {formation.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline decorative element */}
        <motion.div
          className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full top-0"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ height: 'calc(100% - 200px)', top: '200px' }}
        />
      </div>
    </section>
  );
};

export default Experience;