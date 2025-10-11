import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Certifications = () => {
  const { t } = useLanguage();

  // DevOps and System certifications first, then others
  const certifications = [
    {
      titleKey: "certifications.items.devops1.title",
      providerKey: "certifications.items.devops1.provider",
      dateKey: "certifications.items.devops1.date",
      link: "https://coursera.org/share/ee3147a5d02c4911be1a7daafab3215e",
      category: "devops"
    },
    {
      titleKey: "certifications.items.devops2.title",
      providerKey: "certifications.items.devops2.provider",
      dateKey: "certifications.items.devops2.date",
      link: "https://coursera.org/share/d480b8dc4d4ec80edcca357c8a262852",
      category: "devops"
    },
    {
      titleKey: "certifications.items.system1.title",
      providerKey: "certifications.items.system1.provider",
      dateKey: "certifications.items.system1.date",
      link: "https://coursera.org/share/ac2fa720e45cc0dca9b43a360ef62e72",
      category: "system"
    },
    {
      titleKey: "certifications.items.devops3.title",
      providerKey: "certifications.items.devops3.provider",
      dateKey: "certifications.items.devops3.date",
      link: "https://www.coursera.org/projects/linux-io-redirection-for-devops",
      category: "devops"
    },
    {
      titleKey: "certifications.items.webdev1.title",
      providerKey: "certifications.items.webdev1.provider",
      dateKey: "certifications.items.webdev1.date",
      link: "https://coursera.org/share/6dc2d46b30a581a420629ad15a1b9d36",
      category: "webdev"
    },
    {
      titleKey: "certifications.items.ai1.title",
      providerKey: "certifications.items.ai1.provider",
      dateKey: "certifications.items.ai1.date",
      link: "https://coursera.org/share/5a1f0a20d56584419af92c5f35e8733f",
      category: "ai"
    },
    {
      titleKey: "certifications.items.webdev2.title",
      providerKey: "certifications.items.webdev2.provider",
      dateKey: "certifications.items.webdev2.date",
      link: "https://coursera.org/share/6cc2e2d9189f52c2354e9c6e55be6e3f",
      category: "webdev"
    },
    {
      titleKey: "certifications.items.backend1.title",
      providerKey: "certifications.items.backend1.provider",
      dateKey: "certifications.items.backend1.date",
      link: "https://coursera.org/share/d79408b3d16df4279508b7465adb23d6",
      category: "backend"
    },
    {
      titleKey: "certifications.items.programming1.title",
      providerKey: "certifications.items.programming1.provider",
      dateKey: "certifications.items.programming1.date",
      link: "https://coursera.org/share/5f785dee4d34694bd22df85df98104ac",
      category: "programming"
    },
    {
      titleKey: "certifications.items.programming2.title",
      providerKey: "certifications.items.programming2.provider",
      dateKey: "certifications.items.programming2.date",
      link: "https://coursera.org/share/b6989a3db332d592dd7452fa4ecdb688",
      category: "programming"
    },
    {
      titleKey: "certifications.items.design1.title",
      providerKey: "certifications.items.design1.provider",
      dateKey: "certifications.items.design1.date",
      link: "https://coursera.org/share/b045de4c7878a6c7d1bed9b89198c990",
      category: "design"
    }
  ];

  return (
    <section id="certifications" className="py-20">
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
            {t('certifications.title').split(' ')[0]} <span className="gradient-text">{t('certifications.title').split(' ')[1]}</span>
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('certifications.description')}
          </p>
        </motion.div>

        {/* Certifications Display - Grid or Carousel */}
        {certifications.length <= 6 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        cert.category === 'devops' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        cert.category === 'system' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        cert.category === 'ai' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      }`}>
                        {t(`certifications.category.${cert.category}`)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                      {t(cert.titleKey)}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {t(cert.providerKey)}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {t('certifications.completed')} {t(cert.dateKey)}
                    </p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-hero-gradient text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    {t('certifications.view')}
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
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
              {certifications.map((cert, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30 h-full"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            cert.category === 'devops' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                            cert.category === 'system' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                            cert.category === 'ai' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                            'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                          }`}>
                            {t(`certifications.category.${cert.category}`)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                          {t(cert.titleKey)}
                        </h3>
                        <p className="text-primary font-semibold mb-2">
                          {t(cert.providerKey)}
                        </p>
                        <p className="text-muted-foreground text-sm mb-4">
                          {t('certifications.completed')} {t(cert.dateKey)}
                        </p>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-hero-gradient text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        {t('certifications.view')}
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default Certifications;