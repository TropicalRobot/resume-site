import React from 'react'
import ContentSection from '@/components/ContentSection'

const AboutSection: React.FC = () => {
    return (
        <ContentSection
            className='bg-white relative text-lg'
            contentAlign='left'
            heading='About Me'
            intro='Creative and empathetic developer with a passion for thoughtful UX, accessible front-ends, and building things that matter.'>
            <p>
                I&apos;m a seasoned Full Stack Developer with 11 years of experience, progressing
                from Junior Developer to Technical Director at a digital agency. Throughout my
                career, I&apos;ve maintained a hands-on coding approach even while taking on
                increasing leadership responsibilities.
            </p>
            <p>
                My focus is on front-end development—building responsive, accessible, and
                user-friendly interfaces that bring designs to life and deliver real business value.
                I excel at translating design concepts into performant web experiences, while my
                full-stack background provides valuable context for how frontend solutions integrate
                with backend systems.
            </p>
            <p>
                I&apos;ve led technical teams, delivered complex digital projects, and collaborated
                with clients across the arts, travel, charity, and ethical sectors. After an
                intentional career break to travel and gain fresh perspectives, I&apos;m now
                preparing for the next chapter in my professional journey.
            </p>
            <p>
                I value simplicity, collaboration, and doing great work for good people. Whether
                coding, planning, or mentoring, I bring a mix of hands-on technical skills and
                big-picture thinking—ensuring solutions are both polished and purpose-driven.
            </p>
        </ContentSection>
    )
}

export default AboutSection
