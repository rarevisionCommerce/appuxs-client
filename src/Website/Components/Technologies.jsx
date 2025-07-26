import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp,
  Code,
  Server,
  Smartphone,
  Database,
  Cloud,
  Briefcase
} from 'lucide-react';

// Simulating your imported images - replace these with your actual imports
const FrontEnd = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop";
const BackEnd = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop";
const MobileStack = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop";
const DBMS = "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=200&fit=crop";
const IAC = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop";
const Bm = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop";

const TechStackDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setOpenDropdown(prev => prev === section ? null : section);
  };

  const techCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      image: FrontEnd,
      technologies: [
        { name: 'React JS', description: 'Modern JavaScript library for building user interfaces' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development' },
        { name: 'TypeScript', description: 'Typed superset of JavaScript for better development' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      image: BackEnd,
      technologies: [
        { name: 'Node.js', description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
        { name: 'RESTful API', description: 'Architectural style for designing networked applications' }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />,
      image: MobileStack,
      technologies: [
        { name: 'React Native', description: 'Framework for building native mobile apps using React' },
        { name: 'Capacitor', description: 'Cross-platform native runtime for web apps' }
      ]
    },
    {
      id: 'database',
      title: 'Database Management',
      icon: <Database className="w-6 h-6" />,
      image: DBMS,
      technologies: [
        { name: 'MySQL', description: 'Popular open-source relational database' },
        { name: 'MongoDB', description: 'Document-oriented NoSQL database' },
        { name: 'Cassandra', description: 'Distributed NoSQL database for big data' }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      image: IAC,
      technologies: [
        { name: 'GitHub', description: 'Version control and collaboration platform' },
        { name: 'Docker', description: 'Containerization platform for applications' },
        { name: 'AWS', description: 'Cloud computing services and infrastructure' }
      ]
    },
    {
      id: 'business',
      title: 'Business Tools',
      icon: <Briefcase className="w-6 h-6" />,
      image: Bm,
      technologies: [
        { name: 'Python', description: 'Versatile programming language for data analysis' },
        { name: 'JavaScript', description: 'Programming language for web development' }
      ]
    }
  ];

  // Split categories into rows for large screens
  const firstRow = techCategories.slice(0, 3);
  const secondRow = techCategories.slice(3, 6);

  const renderTechCard = (category) => (
    <div 
      key={category.id}
      className="rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl bg-white"
    >
      {/* Category Header */}
      <div 
        className="relative overflow-hidden rounded-xl cursor-pointer"
        onClick={() => toggleDropdown(category.id)}
      >
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
        >
          <div className="p-6 w-full">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#facc15' }}>
                  {React.cloneElement(category.icon, { style: { color: '#1e293b' } })}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="transition-transform duration-300">
                {openDropdown === category.id ? 
                  <ChevronUp className="w-6 h-6" /> : 
                  <ChevronDown className="w-6 h-6" />
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown - Only visible on small screens */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          openDropdown === category.id 
            ? 'max-h-[500px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 space-y-4">
          {category.technologies.map((tech, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-md"
              style={{ backgroundColor: '#f1f5f9' }}
            >
              <div 
                className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: '#facc15' }}
              ></div>
              <div>
                <h4 
                  className="font-semibold text-lg mb-1"
                  style={{ color: '#1e293b' }}
                >
                  {tech.name}
                </h4>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: '#64748b' }}
                >
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHorizontalDropdown = (categories, rowName) => {
    const activeCategory = categories.find(cat => openDropdown === cat.id);
    if (!activeCategory) return null;

    return (
      <div 
        className={`hidden lg:block  w-full overflow-hidden transition-all duration-500 ease-in-out ${
          activeCategory ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div 
          className="w-full rounded-xl p-6 shadow-lg"
          style={{ backgroundColor: 'white' }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#facc15' }}>
              {React.cloneElement(activeCategory.icon, { style: { color: '#1e293b' } })}
            </div>
            <h3 
              className="text-2xl font-bold"
              style={{ color: '#1e293b' }}
            >
              {activeCategory.title}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-6">
            {activeCategory.technologies.map((tech, index) => (
              <div 
                key={index}
                className="flex-1 min-w-[250px] p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: '#f1f5f9' }}
              >
                <div className="flex items-start gap-3">
                  <div 
                    className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#facc15' }}
                  ></div>
                  <div>
                    <h4 
                      className="font-semibold text-lg mb-2"
                      style={{ color: '#1e293b' }}
                    >
                      {tech.name}
                    </h4>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: '#64748b' }}
                    >
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: '#f1f5f9' }} id="stck">
      <div className="container mx-auto">
        {/* Header */}
        <div className=" mb-12">
         <h2 className="text-2xl lg:text-4xl font-bold text-slate-800 mb-3 ">
            Tech <span className="text-yellow-500">Stack</span>
          </h2>
          <div className="h-[5px] rounded-full w-28 mb-3 bg-gradient-to-r from-transparent to-dark"></div>
        </div>

        {/* First Row */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {firstRow.map(renderTechCard)}
        </div>

        {/* Horizontal Dropdown for First Row - Large screens only */}
        {renderHorizontalDropdown(firstRow, 'first')}

        {/* Second Row */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8 mt-8">
          {secondRow.map(renderTechCard)}
        </div>

        {/* Horizontal Dropdown for Second Row - Large screens only */}
        {renderHorizontalDropdown(secondRow, 'second')}

        
      </div>
    </div>
  );
};

export default TechStackDropdown;