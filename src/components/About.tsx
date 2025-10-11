import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('about.stats.projects'), value: '7+' },
    { label: t('about.stats.certifications'), value: '10+' },
    { label: t('about.stats.experience'), value: '3+' },
    { label: t('about.stats.skills'), value: '8+' },
  ];

  const services = [
    {
      icon: GraduationCap,
      title: t('about.education.isep'),
      description: t('about.education.isep_desc'),
    },
    {
      icon: Award,
      title: t('about.education.sonatel'),
      description: t('about.education.sonatel_desc'),
    },
    {
      icon: Briefcase,
      title: t('about.experience.projects'),
      description: t('about.experience.projects_desc'),
    },
    {
      icon: Users,
      title: t('about.experience.teamwork'),
      description: t('about.experience.teamwork_desc'),
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
            {t('about.title').split(' ')[0]} <span className="gradient-text">{t('about.title').split(' ')[1]}</span>
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
              {t('about.description')}
            </p>

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
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">{t('about.services.title')}</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('about.services.description')}
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