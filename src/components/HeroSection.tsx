import { motion } from 'framer-motion';
import { Download, ArrowDown, MapPin, Mail, Phone, BuildingIcon, HardHatIcon } from 'lucide-react';
import { PersonalInfo } from '../data/portfolioData';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  onNavigate: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo, onNavigate }) => {
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

  const handleDownloadCV = () => {
    // Implement CV download functionality
    console.log('Downloading CV...');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary-300 rounded-full flex items-center justify-center"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-primary-300 rounded-full flex items-center justify-center"><HardHatIcon className="text-white w-12 h-12 rotate-45"/></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border-2 border-primary-300 rounded-full flex items-center justify-center"><BuildingIcon className="text-white"/></div>
      </div>

      <div className="container-custom relative w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-right w-full h-screen mx-auto flex flex-col items-end justify-center"
        >
          {/* Profile Image */}
          <motion.div 
            variants={itemVariants} 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-[90%] h-full object-cover"
                style={{
                  filter: 'saturate(0.2) brightness(0.9)',
                  opacity: 0.8
                }}
              />
          </motion.div>

          {/* Name and Title */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-white mb-4">
            {personalInfo.name}
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-primary-700 mb-6">
            {personalInfo.title}
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-primary-400 mb-8 leading-relaxed max-w-3xl">
            {personalInfo.shortDescription}
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">            
            <button
              onClick={handleDownloadCV}
              className="btn-secondary flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Check My CV</span>
            </button>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 text-sm text-primary-600">
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <span>{personalInfo.email}</span>
            </div>
            {personalInfo.phone && (
              <div className="flex items-center space-x-2">
                <Phone size={20} />
                <span>{personalInfo.phone}</span>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
