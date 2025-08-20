import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import AwardsSection from './components/AwardsSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import {
  personalInfo,
  experiences,
  education,
  skills,
  awards,
  projects
} from './data/portfolioData';

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [activeSection, setActiveSection] = useState<string>('home');
  
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    main: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    awards: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null)
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  // Function to detect which section is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Check each section to see which one is currently in view
      Object.entries(sectionRefs).forEach(([sectionName, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition <= offsetTop + offsetHeight) {
            setActiveSection(sectionName);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedProjectData = selectedProject 
    ? projects.find(p => p.id === selectedProject) 
    : null;

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {selectedProject && selectedProjectData ? (
          <motion.div
            key="project-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Header onNavigate={handleNavigate} />
            <ProjectDetail 
              project={selectedProjectData} 
              onBack={handleBackToProjects} 
            />
            <Footer personalInfo={personalInfo} />
          </motion.div>
        ) : (
          <motion.div
            key="main-portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Header onNavigate={handleNavigate} />
            
            {/* Hero Section */}
            <div ref={sectionRefs.home}>
              <HeroSection 
                personalInfo={personalInfo} 
                onNavigate={handleNavigate} 
              />
            </div>

            <div ref={sectionRefs.main}
              >
              {/*side navigation*/}
               <div className="sticky h-screen top-0 right-0 float-right flex flex-col items-end justify-center text-white space-y-20 z-10 p-4 font-bold text-5xl">
                  <div 
                    className={`cursor-pointer transition-all transform -rotate-[18deg] origin-right ${
                      activeSection === 'about' 
                        ? 'text-primary-900 scale-[120%] [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]' 
                        : 'hover:text-primary-900 hover:scale-[120%] hover:[text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]'
                    }`}
                    onClick={() => handleNavigate('about')}
                  >
                    About
                  </div>
                  <div 
                    className={`cursor-pointer transition-all transform -rotate-[12deg] origin-right ${
                      activeSection === 'education' 
                        ? 'text-primary-900 scale-[120%] [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]' 
                        : 'hover:text-primary-900 hover:scale-[120%] hover:[text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0#fff]'
                    }`}
                    onClick={() => handleNavigate('education')}
                  >
                    Education
                  </div>
                  <div 
                    className={`cursor-pointer transition-all transform -rotate-[6deg] origin-right ${
                      activeSection === 'experience' 
                        ? 'text-primary-900 scale-[120%] [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]' 
                        : 'hover:text-primary-900 hover:scale-[120%] hover:[text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]'
                    }`}
                    onClick={() => handleNavigate('experience')}
                  >
                    Experience
                  </div>
                  <div 
                    className={`cursor-pointer transition-all transform -rotate-0 origin-right ${
                      activeSection === 'skills' 
                        ? 'text-primary-900 scale-[120%] [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]' 
                        : 'hover:text-primary-900 hover:scale-[120%] hover:[text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]'
                    }`}
                    onClick={() => handleNavigate('skills')}
                  >
                    Skills
                  </div>
                  <div 
                    className={`cursor-pointer transition-all transform rotate-[6deg] origin-right ${
                      activeSection === 'awards' 
                        ? 'text-primary-900 scale-[120%] [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]' 
                        : 'hover:text-primary-900 hover:scale-[120%] hover:[text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]'
                    }`}
                    onClick={() => handleNavigate('awards')}
                  >
                    Awards
                  </div>
                  <div 
                    className={`cursor-pointer transition-all transform rotate-[12deg] origin-right ${
                      activeSection === 'projects' 
                        ? 'text-primary-900 scale-[120%] [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]' 
                        : 'hover:text-primary-900 hover:scale-[120%] hover:[text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]'
                    }`}
                    onClick={() => handleNavigate('projects')}
                  >
                    Projects
                  </div>
                  <div 
                    className={`cursor-pointer transition-all transform rotate-[18deg] origin-right ${
                      activeSection === 'home' 
                        ? 'text-primary-900 scale-[120%] [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]' 
                        : 'hover:text-primary-900 hover:scale-[120%] hover:[text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]'
                    }`}
                    onClick={() => handleNavigate('home')}
                  >
                    Contact
                  </div>
                 </div>

              {/* About Section */}
              <div ref={sectionRefs.about} className="relative">

                <AboutSection personalInfo={personalInfo} />
              </div>

              {/* Education Section */}
              <div ref={sectionRefs.education}>
                <EducationSection education={education} />
              </div>

              {/* Experience Section */}
              <div ref={sectionRefs.experience}>
                <ExperienceSection experiences={experiences} />
              </div>

              {/* Skills Section */}
              <div ref={sectionRefs.skills}>
                <SkillsSection skills={skills} />
              </div>

              {/* Awards Section */}
              <div ref={sectionRefs.awards}>
                <AwardsSection awards={awards} />
              </div>

              {/* Projects Section */}
              <div ref={sectionRefs.projects}>
                <ProjectsSection 
                  projects={projects} 
                  onProjectClick={handleProjectClick} 
                />
              </div>
            </div>
            {/* Footer */}
            <Footer personalInfo={personalInfo} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
