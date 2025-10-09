import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useLanguage } from '@/hooks/use-language';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const Hero = () => {
  const { t } = useLanguage();
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient-subtle opacity-20" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-primary text-lg font-medium">{t('hero.greeting')}</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground">
                Gorgui<br />
                <span className="gradient-text">Marena</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-muted-foreground font-light"
            >
              {t('hero.role')}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Dialog open={isCVOpen} onOpenChange={setIsCVOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="btn-primary relative z-10 font-semibold"
                  >
                    <Eye size={20} className="mr-2" />
                    {t('hero.viewCV')}
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-full h-full max-w-none sm:max-w-4xl sm:h-[90vh] p-4">
                  <DialogTitle className="sr-only">{t('hero.cvTitle')}</DialogTitle>
                  <DialogDescription className="sr-only">
                    {t('hero.cvDescription')}
                  </DialogDescription>
                  <DialogHeader className="flex flex-row items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">{t('hero.cvTitle')}</h2>
                    <div className="flex items-center gap-2">
                      <a
                        href="/gorgui-marena-cv-en.pdf"
                        download="Gorgui Marena CV.pdf"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4"
                      >
                        <Download size={16} className="mr-2" />
                        {t('hero.downloadCV')}
                      </a>

                    </div>
                  </DialogHeader>
                  <div className="w-full h-full bg-white rounded-lg p-2 sm:p-4 overflow-y-auto">
                    <Document
                      file="/gorgui-marena-cv-en.pdf"
                      onLoadSuccess={onDocumentLoadSuccess}
                      className="flex flex-col items-center space-y-2 sm:space-y-4"
                    >
                      {Array.from(new Array(numPages), (el, index) => (
                        <Page
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                          scale={0.75}
                          className="shadow-lg max-w-full"
                        />
                      ))}
                    </Document>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToAbout}
                className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary"
              >
                <Mail size={20} className="mr-2" />
                {t('hero.discover')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 200, damping: 20 } }}
              className="relative"
            >
              <img
                src="/Gorgui Marena-Photoroombg-remoted.png"
                alt="Gorgui Marena - Développeur Full-Stack"
                className="w-[28rem] h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] object-contain object-center drop-shadow-2xl"
              />
              {/* Floating Bubbles */}
              <motion.div
                className="absolute -top-6 -left-6 w-4 h-4 bg-primary/70 rounded-full shadow-lg"
                animate={{ y: [-25, -80], x: [0, 5], opacity: [0.7, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.div
                className="absolute top-1/4 -right-8 w-5 h-5 bg-primary/60 rounded-full shadow-md"
                animate={{ y: [-35, -90], x: [0, -3], opacity: [0.6, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.div
                className="absolute top-1/2 -left-10 w-3 h-3 bg-primary/80 rounded-full shadow-lg"
                animate={{ y: [-30, -75], x: [0, 4], opacity: [0.8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.div
                className="absolute bottom-1/4 -right-6 w-4 h-4 bg-primary/65 rounded-full shadow-md"
                animate={{ y: [-28, -85], x: [0, -2], opacity: [0.65, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, delay: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.div
                className="absolute -bottom-4 left-1/4 w-2 h-2 bg-primary/75 rounded-full shadow-sm"
                animate={{ y: [-20, -60], x: [0, 3], opacity: [0.75, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.div
                className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary/55 rounded-full shadow-md"
                animate={{ y: [-32, -78], x: [0, -4], opacity: [0.55, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm font-medium">{t('hero.scroll')}</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;