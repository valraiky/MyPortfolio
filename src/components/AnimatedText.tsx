import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  startDelay?: number;
}

const AnimatedText = ({ 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000, 
  startDelay = 1000 
}: AnimatedTextProps) => {
  const texts = [
    "Développeur fullstack passionné",
    "Amoureux de l'automation",
    "Explorateur de l'IA et de données",
    "Créateur de solutions innovantes",
    "Apprenti MLdevSecops"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const [isStarting, setIsStarting] = useState(true);

  useEffect(() => {
    const handleTyping = () => {
      const current = currentTextIndex % texts.length;
      const fullText = texts[current];

      if (isStarting) {
        // Délai au début
        setTimeout(() => {
          setIsStarting(false);
        }, startDelay);
        return;
      }

      if (isPausing) {
        // En pause après l'affichage complet
        setTimeout(() => {
          setIsPausing(false);
          setIsDeleting(true);
        }, pauseTime);
        return;
      }

      if (!isDeleting && !isPausing) {
        // Mode écriture
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Texte complètement affiché, on passe en pause
          setIsPausing(true);
          return;
        }
      } else if (isDeleting) {
        // Mode effacement
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Texte complètement effacé, on passe au suivant
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          return;
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);
    
    return () => clearTimeout(timer);
  }, [
    currentText, 
    currentTextIndex, 
    isDeleting, 
    isPausing, 
    isStarting, 
    texts, 
    typingSpeed, 
    deletingSpeed, 
    pauseTime, 
    startDelay
  ]);

  return (
    <div>
      <p className="text-2xl md:text-3xl font-mono bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent min-h-[60px]">
        {currentText}
        <span className="ml-1 animate-pulse">|</span>
      </p>
    </div>
  );
};

export default AnimatedText;