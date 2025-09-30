import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projets Réalisés', value: '50+' },
    { label: 'Années d\'Expérience', value: '5+' },
    { label: 'Clients Satisfaits', value: '30+' },
    { label: 'Technologies Maîtrisées', value: '15+' },
  ];

  const services = [
    {
      icon: Globe,
      title: 'Développement Web',
      description: 'Applications web modernes et responsives avec React, Next.js et TypeScript.',
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Apps mobiles natives et cross-platform avec React Native et Flutter.',
    },
    {
      icon: Database,
      title: 'Backend & API',
      description: 'APIs robustes et bases de données optimisées avec Node.js et PostgreSQL.',
    },
    {
      icon: Code,
      title: 'Architecture & DevOps',
      description: 'Solutions cloud, CI/CD et architecture microservices pour la scalabilité.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
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
            À <span className="gradient-text">propos</span>
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Développeur passionné avec plus de 5 ans d'expérience dans la création 
              d'applications web et mobiles. J'aime transformer des idées complexes en 
              solutions élégantes et intuitives.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ma force réside dans ma capacité à allier créativité et technique pour 
              livrer des produits de qualité qui dépassent les attentes des clients.
              Toujours en veille technologique, j'adore apprendre et relever de nouveaux défis.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Python', 'Node.js/Express.js', 'Java', 'Php', 'Devops'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Mes Services</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Je propose une gamme complète de services pour transformer vos idées en réalité digitale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl text-center hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-hero-gradient rounded-full mb-4 group-hover:shadow-glow transition-all duration-300">
                  <Icon size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;