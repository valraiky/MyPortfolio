import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  EyeIcon, 
  CodeBracketIcon, 
  UserGroupIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const ProjetsRealises = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projets = [
    {
      title: "Gestion Patient",
      duration: "2 mois",
      team: "3 développeurs",
      description: "Plateforme e-commerce complète avec gestion des produits, panier, paiements et administration.",
      features: ["Authentification", "Gestion des rôles", "Distribution", "API REST"],
      technologies: ["React", "Express.js", "MySQL", "TypeScript", "Tailwind"],
      demoLink: "#",
      githubLink: "#",
      collaborateLink: "#"
    },
    {
      title: "E-Tady",
      duration: "3 mois",
      team: "1 développeur / DevOps",
      description: "Application permettant de faciliter la recherche de maisons à louer, développée selon la philosophie DevOps.",
      features: ["Carte interactive", "Notifications", "Inventaire", "Paiement"],
      technologies: ["React", "Socket.io", "Stripe", "Leaflet", "MySQL", "Express", "Material UI", "CI/CD", "Docker", "Kubernetes", "Prometheus", "Grafana"],
      demoLink: "#",
      githubLink: "#",
      collaborateLink: "#"
    },
    {
      title: "Portfolio Website",
      duration: "1 mois",
      team: "1 développeur",
      description: "Site portfolio moderne et responsive avec animations et mode sombre.",
      features: ["Responsive design", "Mode sombre", "Animations", "SEO optimisé"],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "#",
      collaborateLink: "#"
    },
    {
      title: "Task Manager",
      duration: "1.5 mois",
      team: "2 développeurs",
      description: "Application de gestion de tâches avec suivi en temps réel et notifications push.",
      features: ["Création de tâches", "Suivi en temps réel", "Notifications push", "Tableau de bord"],
      technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS", "PWA"],
      demoLink: "#",
      githubLink: "#",
      collaborateLink: "#"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projets.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projets.length - 1 : prev - 1));
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

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

  const projectVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    })
  };

  return (
    <section id="projets" className="min-h-screen pt-32 pb-20 bg-white dark:bg-gray-900">
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
            Projets Réalisés
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez quelques-uns de mes projets les plus marquants et les technologies utilisées
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12">
          <motion.div
            key={currentProject}
            custom={1}
            variants={projectVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col lg:flex-row gap-8"
          >
            {/* Project Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {projets[currentProject].title}
                </h3>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CalendarDaysIcon className="w-5 h-5 mr-1" />
                    <span>{projets[currentProject].duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <UserGroupIcon className="w-5 h-5 mr-1" />
                    <span>{projets[currentProject].team}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {projets[currentProject].description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Fonctionnalités clés
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projets[currentProject].features.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projets[currentProject].technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={projets[currentProject].demoLink}
                  className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                >
                  <EyeIcon className="w-5 h-5" />
                  Demo
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={projets[currentProject].githubLink}
                  className="flex items-center gap-2 px-5 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                  Code
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={projets[currentProject].collaborateLink}
                  className="flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
                >
                  <UserGroupIcon className="w-5 h-5" />
                  Collaborer
                </motion.a>
              </div>
            </div>

            {/* Project Image Placeholder */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg font-semibold">
                Preview du projet
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {projets.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentProject 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Best Projects Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Mes Meilleurs Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projets.map((projet, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {projet.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {projet.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <CalendarDaysIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{projet.duration}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <UserGroupIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{projet.team}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={projet.demoLink}
                    className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    <EyeIcon className="w-4 h-4" />
                    Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={projet.githubLink}
                    className="flex items-center gap-1 px-3 py-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    <CodeBracketIcon className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Intéressé par mon travail ?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Découvrez plus de projets sur mon GitHub, y compris plusieurs réalisations en configuration et sécurisation de réseaux.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-lg font-semibold transition-colors"
          >
            <CodeBracketIcon className="w-5 h-5" />
            Voir tous mes projets
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjetsRealises;