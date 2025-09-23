import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Code, ExternalLink, Building} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
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
    <div className="min-h-screen bg-gradient-to-b from-black to-primary-900">
      <div className="container-custom py-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center space-x-2 text-white hover:text-primary-400 mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </motion.button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Project Header */}
          <motion.div variants={itemVariants} className="py-8 mb-2">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <div className="relative">
                {project.image ? (
                  <img
                    src={project.image[0]}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="w-full h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center shadow-lg">
                    <div className="text-8xl text-primary-400">🏗️</div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                
                <p className="text-lg text-primary-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User size={20} className="text-primary-500" />
                    <div>
                      <span className="text-sm text-primary-500 font-medium">Role</span>
                      <p className="text-primary-500 font-medium">{project.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Calendar size={20} className="text-primary-500" />
                    <div>
                      <span className="text-sm text-primary-500 font-medium">Period</span>
                      <p className="text-primary-500 font-medium">{project.period}</p>
                    </div>
                  </div>

                  {project.company && (
                    <div className="flex items-center space-x-3">
                      <Building size={20} className="text-primary-500" />
                      <div>
                        <span className="text-sm text-primary-500 font-medium">Company</span>
                        <p className="text-primary-500 font-medium">{project.company}</p>
                      </div>
                    </div>
                  )}

                  {project.link && (
                    <div className="flex items-center space-x-3">
                      <ExternalLink size={20} className="text-primary-600" />
                      <div>
                        <span className="text-sm text-primary-500 font-medium">Project Link</span>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200"
                        >
                          View Live Project
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Content */}
          <div className="grid lg:grid-cols-3 gap-8 mb-4">
            {/* Main Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              {/* Responsibilities */}
              <div className="rounded-xl border border-primary-100 p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Responsibilities & Achievements
                </h2>
                <ul className="space-y-4">
                  {project.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-primary-400 leading-relaxed">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>             
              {/* Technologies */}
              <div className="rounded-xl border border-primary-100 p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Code size={20} className="mr-2" />
                  Technologies Used
                </h3>
                <div className="gap-3 grid grid-cols-2">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>              
            </motion.div>
          </div>

            <motion.div variants={itemVariants} className="space-y-6">
              {/* Project Gallery */}
              <div className="py-8">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Project Gallery
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {project.image.map((image, idx) => (
                    <div
                      key={idx}
                      className="h-full bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center"
                    >
                      <img
                        src={image}
                        alt={project.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              {/* <div className="bg-white rounded-xl shadow-sm border border-primary-100 p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  Project Statistics
                </h3>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-800">100%</div>
                    <div className="text-sm text-primary-600">Completion Rate</div>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-800">On Time</div>
                    <div className="text-sm text-primary-600">Delivery</div>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-800">5.0</div>
                    <div className="text-sm text-primary-600">Client Rating</div>
                  </div>
                </div>
              </div> */}

              {/* Contact CTA */}
              {/* <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white text-center">
                <h3 className="text-lg font-semibold mb-3">
                  Interested in Similar Projects?
                </h3>
                <p className="text-primary-100 text-sm mb-4">
                  Mari kita diskusikan bagaimana saya bisa membantu mewujudkan proyek konstruksi Anda.
                </p>
                <button className="bg-white text-primary-700 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200">
                  Get In Touch
                </button>
              </div> */}
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
