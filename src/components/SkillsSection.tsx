import { motion } from 'framer-motion';
import { Code, Users, TrendingUp } from 'lucide-react';
import { Skill } from '../data/portfolioData';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-blue-500';
      case 'advanced':
        return 'bg-blue-400';
      case 'intermediate':
        return 'bg-blue-300';
      case 'beginner':
        return 'bg-blue-200';
      default:
        return 'bg-primary-500';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'expert':
        return '100';
      case 'advanced':
        return '75';
      case 'intermediate':
        return '50';
      case 'beginner':
        return '25';
      default:
        return '0';
    }
  };

  return (
    <section id="skills" className="bg-gray-900 p-5">
      <div className="w-full md:w-3/4">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="flex flex-col items-end text-right mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Skills & Expertise
              </h2>
              <div className="w-20 h-1 bg-primary-600 rounded-full"></div>
            </motion.div>

            <div className="gap-12">
              {/* Technical Skills */}
              <motion.div variants={itemVariants}>
                <div className="md:p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Code size={20} className="text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Technical Skills
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    {technicalSkills.map((skill) => (
                      <div key={skill.id} className="space-y-1">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                          <span className="font-medium text-white">{skill.name}</span>
                          <span className="text-sm text-primary-400 capitalize">{skill.level}</span>
                        </div>
                        <div className="bg-primary-600 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: getLevelWidth(skill.level) + '%' }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-2 rounded-full ${getLevelColor(skill.level)} transition-all duration-300`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div variants={itemVariants}>
                <div className="py-8 md:p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Users size={20} className="text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Soft Skills
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {softSkills.map((skill) => (
                      <div key={skill.id} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-white">{skill.name}</span>
                          <span className="text-sm text-primary-400 capitalize">{skill.level}</span>
                        </div>
                        <div className="w-full bg-primary-600 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: getLevelWidth(skill.level).replace('w-', '').replace('/', '') + '%' }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-2 rounded-full ${getLevelColor(skill.level)} transition-all duration-300`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Skills Summary */}
            <motion.div variants={itemVariants} className="mt-16">
              <div className="rounded-xl border border-primary-100 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Skills Overview
                  </h3>
                  <p className="text-primary-400 max-w-2xl mx-auto">
                    Kombinasi keahlian teknis dan interpersonal yang memungkinkan saya untuk 
                    mengelola proyek konstruksi secara efektif dan membangun hubungan kerja yang kuat.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp size={32} className="text-primary-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary-200 mb-2">Technical Excellence</h4>
                    <p className="text-primary-400 text-sm">
                      Penguasaan software engineering dan pemahaman konsep dasar serta analisis struktur yang mendalam
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users size={32} className="text-primary-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary-200 mb-2">Leadership</h4>
                    <p className="text-primary-400 text-sm">
                      Kemampuan memimpin tim dan mengkoordinasikan berbagai stakeholder
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code size={32} className="text-primary-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary-200 mb-2">Innovation</h4>
                    <p className="text-primary-400 text-sm">
                      Implementasi teknologi terbaru untuk efisiensi proyek
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
