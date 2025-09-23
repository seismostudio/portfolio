import { motion } from 'framer-motion';
import { ExternalLink, Calendar, User, Building } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick: (projectId: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onProjectClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="bg-gradient-to-b from-black to-gray-900 p-5">
      <div className='bg-transparent w-full md:w-3/4'>
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-left flex flex-col mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Project
              </h2>
              <div className="w-20 h-1 bg-primary-600 rounded-full"></div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-black/50 rounded-xl shadow-sm border border-primary-100 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  onClick={() => onProjectClick(project.id)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-6xl text-primary-400">🏗️</div>
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink size={32} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-500 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-primary-400 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2 text-primary-400">
                        <User size={16} />
                        <span className="text-sm font-medium">{project.role}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-primary-400">
                        <Calendar size={16} />
                        <span className="text-sm">{project.period}</span>
                      </div>

                      {project.company && (
                      <div className="flex items-center space-x-2 text-primary-400">
                        <Building size={16} />
                        <span className="text-sm">{project.company}</span>
                      </div>
                      )}

                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <button className="w-full bg-primary-50 text-primary-700 py-2 rounded-lg font-medium hover:bg-primary-100 transition-colors duration-200 group-hover:bg-primary-100">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
