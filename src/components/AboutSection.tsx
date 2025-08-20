import { motion } from 'framer-motion';
import { User, MapPin, Mail, Linkedin, Phone, TriangleRightIcon, Building2Icon } from 'lucide-react';
import { PersonalInfo } from '../data/portfolioData';

interface AboutSectionProps {
  personalInfo: PersonalInfo;
}

const AboutSection: React.FC<AboutSectionProps> = ({ personalInfo }) => {
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

  const contactItems = [
    { icon: Mail, label: 'Email', value: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, link: personalInfo.phone ? `tel:${personalInfo.phone}` : undefined },
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Linkedin, label: 'LinkedIn', value: 'in/davidharlyrp', link: personalInfo.linkedin }
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-gray-900 to-black p-5">
      <div className="bg-transparent rounded-3xl w-3/4">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Content */}
            <motion.div variants={itemVariants}>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-primary-600 rounded-full"></div>
              </div>

              <div className="space-y-6 text-primary-100 leading-relaxed">
                <p className="text-lg">
                  Saya adalah seorang Civil Engineer yang berfokus pada geoteknik dan desain struktur, serta aktif sebagai penggiat Building Information Modeling (BIM). 
                  Keahlian saya mencakup analisis perilaku tanah, perancangan struktur yang stabil dan efisien, serta pengembangan alur kerja teknik sipil yang memadukan teori dengan penerapan di lapangan.
                </p>
                
                <p className="text-lg">
                  Saya memiliki ketertarikan besar untuk menyederhanakan analisis dan konsep di bidang teknik sipil, khususnya geoteknik, agar lebih mudah dipahami dan diaplikasikan oleh praktisi maupun pelajar. 
                  Bagi saya, tantangan teknik adalah peluang untuk menciptakan solusi yang efektif tanpa mengorbankan aspek keamanan dan ketelitian.
                </p>

                <p className="text-lg">
                  Selama perjalanan profesional, saya terlibat dalam berbagai proyek mulai dari perencanaan bangunan, studi stabilitas lereng, hingga pengembangan konten edukatif dan perangkat bantu teknik sipil. 
                  Dengan memadukan ketelitian, kreativitas, dan pemahaman mendalam terhadap prinsip teknik, saya berkomitmen memberikan hasil kerja yang tidak hanya memenuhi standar, tetapi juga memberikan nilai lebih.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <User size={20} className="mr-2" />
                  Contact Information
                </h3>
                <div className="space-y-3 grid grid-cols-2">
                  {contactItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                        <item.icon size={16} className="text-primary-800" />
                      </div>
                      <div className="flex-1">
                        <span className="text-sm text-primary-200 font-medium">{item.label}</span>
                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.label === 'LinkedIn' || item.label === 'GitHub' ? '_blank' : undefined}
                            rel={item.label === 'LinkedIn' || item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                            className="block text-primary-100 hover:text-primary-500 transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="block text-primary-100">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div variants={itemVariants} className="relative">
              {/* Main Image/Icon */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <img
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        className="w-[90%] h-full object-cover"
                        style={{
                          filter: 'saturate(0.2) brightness(0.9)'
                        }}
                      />
                      {/* <User size={80} className="text-primary-600" /> */}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Building2Icon/>
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center shadow-lg"
                >
                  <TriangleRightIcon/>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">3+</div>
                  <div className="text-sm text-primary-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">25+</div>
                  <div className="text-sm text-primary-200">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">15+</div>
                  <div className="text-sm text-primary-200">Team Members</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
