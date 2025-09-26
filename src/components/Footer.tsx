import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section-bg border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Gorgui Marena
            </h3>
            <p className="text-muted-foreground">
              Développeur Full-Stack Passionné
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { name: 'Accueil', href: '#home' },
              { name: 'À propos', href: '#about' },
              { name: 'Compétences', href: '#skills' },
              { name: 'Projets', href: '#projects' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
          </motion.nav>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-muted-foreground"
          >
            <p className="flex items-center justify-center gap-2 text-sm">
              © {currentYear} Gorgui Marena. Développé avec 
              <Heart size={16} className="text-primary" />
              et beaucoup de café ☕
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ArrowUp size={20} />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;