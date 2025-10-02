import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useLanguage } from '@/hooks/use-language';

const Skills = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const skills = [
    { name: "PHP", level: 85, category: t('skills.languages') },
    { name: "JavaScript", level: 80, category: t('skills.languages') },
    { name: "SQL", level: 75, category: t('skills.concepts') },
    { name: "Git", level: 80, category: t('skills.tools') },
    { name: "Docker", level: 70, category: t('skills.tools') },
    { name: "JSON Server", level: 65, category: t('skills.tools') },
    { name: "POO", level: 75, category: t('skills.concepts') },
    { name: "API REST", level: 70, category: t('skills.concepts') },
    { name: "Base de données relationnelles", level: 75, category: t('skills.concepts') },
    { name: "Travail en équipe", level: 90, category: t('skills.softSkills') },
    { name: "Autonomie", level: 85, category: t('skills.softSkills') },
    { name: "Gestion de projet", level: 80, category: t('skills.softSkills') },
  ];

  const skillCategories = [t('skills.languages'), t('skills.tools'), t('skills.concepts'), t('skills.softSkills')];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const CircularProgress = ({
    skill,
    index,
  }: {
    skill: (typeof skills)[0];
    index: number;
  }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = isVisible
      ? circumference - (skill.level / 100) * circumference
      : circumference;

    const getColor = (category: string) => {
      const colors = {
        Frontend: 'from-red-500 to-orange-500',
        Backend: 'from-orange-500 to-yellow-500',
        'Frontend-Backend': 'from-purple-500 to-pink-500',
        Database: 'from-yellow-500 to-red-500',
        DevOps: 'from-red-600 to-orange-600',
      };
      return colors[category as keyof typeof colors];
    };

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 * index }}
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center group"
      >
        <div className="relative w-32 h-32 mb-4">
          {/* Background Circle */}
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="hsl(var(--muted))"
              strokeWidth="6"
              fill="transparent"
              className="opacity-20"
            />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-[2s] ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
          </svg>

          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.5 + 0.1 * index }}
              className="text-2xl font-bold gradient-text"
            >
              {skill.level}%
            </motion.span>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-hero-gradient rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>

        {/* Skill Info */}
        <div className="text-center">
          <h4 className="text-lg font-bold text-foreground mb-1">
            {skill.name}
          </h4>
          <span
            className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${getColor(
              skill.category
            )} text-white font-medium`}
          >
            {skill.category}
          </span>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t('skills.title').split(' ')[0]} <span className="gradient-text">{t('skills.title').split(' ')[1]}</span>
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Skills Display - One Row Initially */}
        {!showAll ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {skills.slice(0, 5).map((skill, index) => (
                <CircularProgress key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        ) : (
          // Full View with Carousel by Category
          skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                className="mb-16"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">
                  <span className="gradient-text">{category}</span>
                </h3>
                
                {categorySkills.length <= 4 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                    {categorySkills.map((skill, index) => (
                      <CircularProgress key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                ) : (
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto"
                  >
                    <CarouselContent className="-ml-4">
                      {categorySkills.map((skill, index) => (
                        <CarouselItem key={skill.name} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                          <CircularProgress skill={skill} index={index} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                  </Carousel>
                )}
              </motion.div>
            );
          })
        )}

        {/* Voir Plus Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-hero-gradient text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            {showAll ? "Voir moins" : "Voir plus"}
          </button>
        </motion.div>

        {/* Technology Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Technologies & Outils
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Next.js",
              "Angular",
              "Node.js",
              "Express",
              "Python",
              "Django",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "Azure Devops",
              "Git",
              "Gitlab"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-foreground border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
