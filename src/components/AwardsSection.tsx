import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin } from 'lucide-react';
import { Award as AwardType } from '../data/portfolioData';

interface AwardsSectionProps {
  awards: AwardType[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
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
    <section id="awards" className="bg-gradient-to-b from-gray-900 to-black p-5 mb-20">
      <div className="w-full md:w-3/4">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Awards & Recognition
              </h2>
              <div className="w-20 h-1 bg-primary-600 rounded-full mx-auto"></div>
            </motion.div>

            {/* Awards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {awards.map((award) => (
                <motion.div
                  key={award.id}
                  variants={itemVariants}
                  className="border-b border-primary-100 md:px-6 py-6 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Award Icon */}
                  <div className="flex flex-row w-full justify-between">
                    <h3 className="w-full text-xl font-semibold text-white mb-3 group-hover:text-primary-700 transition-colors duration-200">
                        {award.title}
                    </h3>
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Trophy size={24} className="text-primary-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-6">                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2 text-primary-400">
                        <MapPin size={16} />
                        <span className="text-sm font-medium">{award.organization}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-primary-400">
                        <Calendar size={16} />
                        <span className="text-sm">{award.year}</span>
                      </div>
                    </div>

                    <p className="text-primary-400 leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
