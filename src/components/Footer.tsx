import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin} from 'lucide-react';
import { PersonalInfo } from '../data/portfolioData';

interface FooterProps {
  personalInfo: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
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
    hidden: { opacity: 0, y: 20 },
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
    <footer className="bg-primary-900 text-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="font-bold text-xl">David Harly Rizky Prabudhi, S.T.</span>
              </div>
              {/* <p className="text-primary-200 mb-6 leading-relaxed max-w-md">
                {personalInfo.shortDescription}
              </p> */}
              <div className="flex space-x-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                {/*<a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>*/}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-primary-200 hover:text-white transition-colors duration-200">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-primary-200 hover:text-white transition-colors duration-200">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-primary-200 hover:text-white transition-colors duration-200">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-primary-200 hover:text-white transition-colors duration-200">
                    Skills
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary-400" />
                  <span className="text-primary-200 text-sm">{personalInfo.email}</span>
                </div>
                {personalInfo.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-primary-400" />
                    <span className="text-primary-200 text-sm">{personalInfo.phone}</span>
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-primary-400" />
                  <span className="text-primary-200 text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-800 mb-8"></div>

          {/* Bottom Footer */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-primary-300 text-sm mb-4 md:mb-0">
              © 2025 David Harly. All rights reserved.
            </div>
            {/* <div className="flex items-center space-x-1 text-primary-300 text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-red-400" />
              <span>for Civil Engineering</span>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
