import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { Experience } from '../data/portfolioData';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="bg-gray-900 p-5">
      <div className="w-3/4">
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
                Professional Experience
              </h2>
              <div className="w-20 h-1 bg-primary-600 rounded-full"></div>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block"></div>
              
              <div className="space-y-12">
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 top-0 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                    <div className="md:ml-24 bg-white rounded-xl shadow-sm border border-primary-100 p-6 hover:shadow-md transition-shadow duration-300">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center space-x-3 mb-3 md:mb-0">
                          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                            <Briefcase size={20} className="text-primary-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-primary-900">
                              {exp.position}
                            </h3>
                            <div className="flex items-center space-x-2 text-primary-600">
                              <MapPin size={16} />
                              <span className="text-sm">{exp.organization}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-primary-600">
                          <Calendar size={16} />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-primary-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary-800 mb-3 flex items-center">
                          <Award size={16} className="mr-2" />
                          Description
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-primary-700 leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
