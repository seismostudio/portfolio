import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { Education as EducationType } from '../data/portfolioData';

interface EducationSectionProps {
  education: EducationType[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
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
    <section id="education" className="p-5 bg-gradient-to-b from-black to-gray-900">
      <div className="w-3/4">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-right flex flex-col items-end mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Education & Qualifications
              </h2>
              <div className="w-20 h-1 bg-primary-600 rounded-full"></div>
            </motion.div>

            {/* Education Cards */}
            <div className="grid md:grid-cols-1 gap-2 mb-10">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="card group hover:shadow-lg transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={32} className="text-primary-200" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-primary-400 font-medium">
                        {edu.field}
                      </p>
                    </div>
                  </div>

                  {/* Institution */}
                  <div className="flex items-center space-x-2 text-primary-400 mb-3">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{edu.institution}</span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center space-x-2 text-primary-400 mb-4">
                    <Calendar size={16} />
                    <span className="text-sm">{edu.period}</span>
                  </div>

                  {/* GPA if available */}
                  {edu.gpa && (
                    <div className="mb-4">
                      <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium">GPA:</span>
                        <span className="text-sm font-bold">{edu.gpa}</span>
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                        <Award size={16} className="mr-2" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-primary-400 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
