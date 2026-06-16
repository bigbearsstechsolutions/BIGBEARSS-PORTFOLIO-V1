import React from 'react'
import { skills } from '../../data/skills';
import * as Icons from 'lucide-react'
import Fadein from '../animations/Fadedin'

const Skills = () => {

    const skillCategories = {
        'Frontend Devlopment' : [
            skills.find(s => s.name === 'React.js'),
            skills.find(s => s.name === 'JaaScript'),
            skills.find(s => s.name === 'TypeScript'),
            skills.find(s => s.name === 'Next.js'),
            skills.find(s => s.name === 'Tailwind CSS'),
            skills.find(s => s.name === 'Redux'),
        ].filter(Boolean),
        'Backend & APIs' : [
            skills.find(s => s.name === 'Node.js'),
            skills.find(s => s.name === 'Rest APIs'),
        ].filter(Boolean),
        'Tools & Others' : [
            skills.find(s => s.name === 'Git & GitHub'),
            skills.find(s => s.name === 'Responsive Design'),
            skills.find(s => s.name === 'Figma'),
            skills.find(s => s.name === 'Vite'),
        ].filter(Boolean)
    }

    // Get Proficiency percentage
    const getProficiencyLevel = (level) => {
        const levels = {
            'Expert' : 95,
            'Advanced' : 80,
            'Intermidiate' : 65,
        }
        return levels[level] || 50;
    }

    // Get level color
    const getLevelColor = (level)  => {
        const colors = {
            'Expert' : 'text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30',
            'Advanced' : 'text-cyan-500/20 border-cyan-500/30',
            'Intermidiate': 'text-emerald-400 bg-emerald=500/20 border-emerald-500/30',
        };
        return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }
  return(
    <section id='skills' className=''>
        {/* Animated background  gradients */}
        <div className=''>
            <div className='' />
            <div className='' />
        </div>

        <div className=''>
            <Fadein delay={100}>
                <div className=''>
                    <div className=''>
                        <Icons.Sparkles className='' />
                        <span className=''>My Expertise</span>
                    </div>
                    <h2 className=''>
                        Skills & Technologies
                    </h2>
                    <p>
                        A Comprehensive overview of my technical skils and proficiency levels 
                    </p>
                </div>
            </Fadein>
            {/* Skills Categories */}
            <div>
                {Object.entries(skillCategories).map(([category, categoryskills], categoryIndec)=>(
                    <Fadein key={category} delay={categoryIndec * 100}>
                        <div className=''>
                            <div className=''>
                                <div className=''></div>
                                <h3 className=''>{category}</h3>
                            </div>
                            {/* skill list */}
                            <div>
                                {categoryskills.map((skill,skillindex)=>{
                                    const Iconcomponents = Icons[skill.icon] || Icons.Code2
                                  })}
                            </div>
                        </div>
              
                    </Fadein>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Skills
