// src/pages/Projects.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, ArrowRight } from 'lucide-react';
import { useSlideUp, useScaleIn } from '../hooks/useScrollAnimation';

const projects = [
  {
    icon: Printer,
    name: 'ClickPrint',
    tagline: 'Skip the queue at the print shop.',
    desc: 'A platform that lets users upload documents, get an instant quote, pay from an in-app wallet, and collect their prints from a nearby print shop — no more waiting in line.',
    status: 'Launching soon',
    to: '/projects/clickprint',
    color: 'from-[#d31773] to-[#b50e61]',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div {...useSlideUp(0)}>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The products we build and operate under the WeCode name.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={project.name} {...useScaleIn(0.2 + index * 0.1)}>
            <Link
              to={project.to}
              className="group relative block h-full p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon size={28} />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 dark:bg-pink-950/30 text-[#d31773] dark:text-[#e85b9e]">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white group-hover:text-[#d31773] dark:group-hover:text-[#e85b9e] transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm font-medium text-[#d31773] dark:text-[#e85b9e] mb-3">
                  {project.tagline}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  {project.desc}
                </p>

                <span className="inline-flex items-center gap-2 font-semibold text-gray-800 dark:text-white group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
