'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import SkillLogo from '../SkillLogo'
import SectionHeader from '../SectionHeader'

const SkillsSection: React.FC = () => {
    const skills = [
        { image: '/images/logos/HTML5-badge.svg', heading: 'HTML5' },
        { image: '/images/logos/CSS3-badge.svg', heading: 'CSS3' },
        { image: '/images/logos/JS-badge-alt.svg', heading: 'JavaScript' },
        { image: '/images/logos/typescript-logo.svg', heading: 'Typescript' },
        { image: '/images/logos/react-logo.svg', heading: 'React' },
        { image: '/images/logos/nextjs-logo.svg', heading: 'NextJS' },
        { image: '/images/logos/vuejs-logo.svg', heading: 'VueJS' },
        { image: '/images/logos/tailwind-css-logo.svg', heading: 'Tailwind CSS' },
        { image: '/images/logos/bootstrap-logo.svg', heading: 'Bootstrap' },
        { image: '/images/logos/php-logo.svg', heading: 'PHP' },
        { image: '/images/logos/laravel-logo.svg', heading: 'Laravel' },
        { image: '/images/logos/wordpress-logo.svg', heading: 'Wordpress' },
        { image: '/images/logos/figma-logo.svg', heading: 'Figma' },
        { image: '/images/logos/docker-logo.svg', heading: 'Docker' },
        { image: '/images/logos/graphQL-logo.svg', heading: 'GraphQL' },
        { image: '/images/logos/salesforce-logo.svg', heading: 'Salesforce' },
        { image: '/images/logos/webflow-logo.svg', heading: 'Webflow' },
        { image: '/images/logos/magento-logo.svg', heading: 'Magento' },
        { image: '/images/logos/woocommerce-logo.svg', heading: 'Woocommerce' },
        { image: '/images/logos/github-copilot-icon.webp', heading: 'Github Copilot' }
    ]

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    }

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring' as const,
                stiffness: 100,
                damping: 15
            }
        }
    }

    return (
        <section className='section bg-white relative py-[30px] lg:py-[40px]'>
            <SectionHeader className='mb-12' heading='My Tools' justify='center' />

            <motion.div
                className='container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}>
                {skills.map((skill) => (
                    <motion.div key={skill.heading} variants={itemVariants}>
                        <SkillLogo image={skill.image} heading={skill.heading} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default SkillsSection
