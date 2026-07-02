// src/pages/About.tsx
import React from 'react';
import { Users, Target, Heart, Lightbulb } from 'lucide-react';
import { useSlideUp, useSlideInLeft, useSlideInRight, useScaleIn } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div {...useSlideUp(0)}>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            We Build the Future,
            <br />
            <span className="text-gradient-primary">One Line of Code at a Time</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Welcome to WeCode — where we transform ideas into elegant digital solutions.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div {...useSlideInLeft(0.2)}>
          <div className="p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/40 dark:to-purple-950/40 flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-[#d31773]" />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To empower businesses with cutting-edge technology and beautiful design,
              making the digital world more accessible and engaging for everyone.
            </p>
          </div>
        </div>

        <div {...useSlideInRight(0.4)}>
          <div className="p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/40 dark:to-purple-950/40 flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-[#d31773]" />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We are a passionate team of developers and designers committed to building
              exceptional web experiences that truly make a difference.
            </p>
          </div>
        </div>
      </div>

      <div {...useScaleIn(0.2)}>
        <div className="bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-gray-800/30 dark:to-gray-900/30 p-10 rounded-3xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Heart, title: 'Quality Craftsmanship', desc: 'Excellence in every line of code we write.' },
              { icon: Users, title: 'User-First Design', desc: 'Creating experiences that users truly love.' },
              { icon: Lightbulb, title: 'Continuous Innovation', desc: 'Always learning and pushing boundaries.' },
              { icon: Target, title: 'Transparent Communication', desc: 'Honest and clear communication throughout.' }
            ].map((value, index) => (
              <div key={index} {...useSlideUp(0.3 + index * 0.15)}>
                <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800/50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-x-1 border border-gray-100 dark:border-gray-700">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#d31773] to-[#b50e61] flex items-center justify-center text-white">
                    <value.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
