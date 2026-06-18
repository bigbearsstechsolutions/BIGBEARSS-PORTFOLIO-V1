import React from 'react'
import { skills } from '../../data/skills';
import * as Icons from 'lucide-react'
import Fadein from '../animations/Fadedin'

const Skills = () => {

    const skillCategories = {
        'Frontend Devlopment': [
            skills.find(s => s.name === 'React.js'),
            skills.find(s => s.name === 'JavaScript'),
            skills.find(s => s.name === 'TypeScript'),
            skills.find(s => s.name === 'Next.js'),
            skills.find(s => s.name === 'Tailwind CSS'),
            skills.find(s => s.name === 'Redux'),
        ].filter(Boolean),
        'Backend & APIs': [
            skills.find(s => s.name === 'Node.js'),
            skills.find(s => s.name === 'Rest APIs'),
        ].filter(Boolean),
        'Tools & Others': [
            skills.find(s => s.name === 'Git & GitHub'),
            skills.find(s => s.name === 'Responsive Design'),
            skills.find(s => s.name === 'Figma'),
            skills.find(s => s.name === 'Vite'),
        ].filter(Boolean)
    }

    // Get Proficiency percentage
    const getProficiencyLevel = (level) => {
        const levels = {
            'Expert': 95,
            'Advanced': 80,
            'Intermediate': 65,
        }
        return levels[level] || 50;
    }

    // Get level color
    const getLevelColor = (level) => {
        const colors = {
            'Expert': 'text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30',
            'Advanced': 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
            'Intermediate': 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30',
        };
        return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }
    return (
        <section id='skills' className='relative py-20 bg-black overflow-hidden'>
            {/* Animated background  gradients */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-1/4 left-0 w-95 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 ' />
                <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl  opacity-50' />
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <Fadein delay={100}>
                    <div className='text-center'>
                        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                            <Icons.Sparkles className='w-4 h-4 text-primary' />
                            <span className='text-sm text-primary font-medium'>My Expertise</span>
                        </div>
                        <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
                            Skills & Technologies
                        </h2>
                        <p className='text-lg text-white/60 max-w-2xl mx-auto'>
                            A Comprehensive overview of my technical skils and proficiency levels
                        </p>
                    </div>
                </Fadein>
                {/* Skills Categories */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {Object.entries(skillCategories).map(([category, categoryskills], categoryIndec) => (
                        <Fadein key={category} delay={categoryIndec * 100}>
                            <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group'>
                                <div className='flex items-center gap-3 mb-6 pb-6 border-b border-white/10'>
                                    <div className='w-1 h-8 bg-linear-to-b from-primary/30 to-primary/10 rounded-full'></div>
                                    <h3 className='text-xl font-medium text-white'>{category}</h3>
                                </div>
                                {/* skill list */}
                                <div className='space-y-5'>
                                    {categoryskills.map((skill, skillindex) => {
                                        const Iconcomponents = Icons[skill.icon] || Icons.Code2
                                        const proficiency = getProficiencyLevel(skill.level)

                                        return (
                                            <div key={skill.id} className='space-y-2'>
                                                <div className='flex items-center justify-between'>
                                                    <div className='flex items-center gap-3'>
                                                        <div className='p-2 bg-white/5 rounded-lg'>
                                                            <Iconcomponents className="w-4 h-4 text-primary" />
                                                        </div>
                                                        <div>
                                                            <div className='text-sm font-medium text-white'>
                                                                {skill.name}
                                                            </div>
                                                            <div className='tet-xs text-white/50'>
                                                                {skill.expreience}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                                                        {skill.level}
                                                    </span>
                                                </div>
                                                <div className='relative h-1.5 bg-white/5 rounded-full overflow-hidden '>
                                                    <div className='absolute top-0 left-0 h-full bg-linear-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 ease-out  ' style={{ width: `${proficiency}%` }}></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                {/* Hover glow effect */}
                                <div className='absolute inset-0 bg-linear-to-br from-primary/5 group-hover:from-primary/5 to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none '></div>
                            </div>

                        </Fadein>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skills
