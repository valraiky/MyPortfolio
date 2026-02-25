import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CloudIcon 
} from '@heroicons/react/24/outline';

const Competences = () => {
  const competences = [
    {
      category: "Frontend",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      skills: [
        { name: "React js", percentage: 80 },
        { name: "Vue", percentage: 40 },
        { name: "Angular", percentage: 70 },
        { name: "Tailwind CSS", percentage: 90 },
        { name: "HTML & CSS", percentage: 90 },
        { name: "Bootstrap", percentage: 70 },
        { name: "Javascript", percentage: 80 }
      ]
    },
    {
      category: "Backend",
      icon: <ServerIcon className="w-6 h-6" />,
      skills: [
        { name: "Express js", percentage: 90 },
        { name: "Nest js", percentage: 85 },
        { name: "Symfony", percentage: 80 },
        { name: "PHP", percentage: 85 },
        { name: "C#", percentage: 60 },
        { name: ".NET", percentage: 60 },
        { name: "API Rest", percentage: 90 },
        { name: "Python", percentage: 50 }
      ]
    },
    {
      category: "Base de données",
      icon: "🗄️",
      skills: [
        { name: "MySQL", percentage: 90 },
        { name: "PostgreSQL", percentage: 85 },
        { name: "MongoDB", percentage: 90 }
      ]
    },
    {
      category: "DevOps",
       icon: <CloudIcon className="w-6 h-6" />,
      skills: [
        { name: "Git", percentage: 92 },
        { name: "Docker", percentage: 70 },
        { name: "Kubernetes", percentage: 60 },
        { name: "Linux", percentage: 70 },
        { name: "CI/CD (GitLab CI, Jenkins)", percentage: 70 },
        { name: "HAProxy", percentage: 60 }
      ]
    }
  ];

  const getColorClass = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-blue-500';
    if (percentage >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <section id="competences" className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
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
            Compétences Techniques
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mes compétences et technologies maîtrisées dans le développement web et mobile
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {competences.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                        {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.category}
                    </h3>
                </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                        {skill.percentage}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${getColorClass(skill.percentage)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div 
          className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Légende des niveaux
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Avancé (80-100%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Intermédiaire (60-79%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Base (40-59%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Débutant (0-39%)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Competences;