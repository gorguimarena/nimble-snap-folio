import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Application E-commerce",
      description:
        "Plateforme e-commerce complète avec paiement intégré, gestion des stocks et tableau de bord administrateur.",
      image: project1,
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      github: "#",
      demo: "#",
      category: "Web App",
    },
    {
      id: 2,
      title: "App Mobile Fitness",
      description:
        "Application mobile de fitness avec suivi des entraînements, plans personnalisés et communauté sociale.",
      image: project2,
      technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
      github: "#",
      demo: "#",
      category: "Mobile App",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description:
        "Tableau de bord interactif pour l'analyse de données avec visualisations en temps réel et rapports automatisés.",
      image: project3,
      technologies: ["Next.js", "TypeScript", "D3.js", "Python"],
      github: "#",
      demo: "#",
      category: "Dashboard",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-section-bg">
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
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents qui démontrent mes
            compétences et ma passion pour le développement
          </p>
        </motion.div>

        {/* Projects Carousel or Grid */}
        {projects.length <= 3 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="project-card rounded-xl overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 bg-white text-black hover:bg-gray-100"
                      >
                        <Eye size={16} className="mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-xs font-medium rounded text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="project-card rounded-xl overflow-hidden group h-full"
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-4">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                          >
                            <Github size={16} className="mr-2" />
                            Code
                          </Button>
                          <Button
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 bg-white text-black hover:bg-gray-100"
                          >
                            <Eye size={16} className="mr-2" />
                            Demo
                          </Button>
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-xs font-medium rounded text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-between items-center">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          <Github size={16} className="mr-2" />
                          GitHub
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Intéressé par mon travail ? Découvrez plus de projets sur mon GitHub
          </p>
          <a
            href="https://github.com/gorguimarena"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="btn-primary">
              <Github size={20} className="mr-2" />
              Voir tous mes projets
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
