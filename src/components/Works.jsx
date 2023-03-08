import Tilt from 'react-parallax-tilt'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github, live } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, slideIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:54.6875rem)');

    setIsMobile(mediaQuery.matches)

    const handleChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (


    <div>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary px-5 pb-5 pt-2 rounded-2xl sm:w-[360px] w-full'>
        <div className='flex gap-x-2 mb-4'>
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            title='Github Repo'
          >
            <img src={github} alt='github' className='w-1/2 h-1/2' />
          </div>

          {live_demo_link && <div
            onClick={() => window.open(live_demo_link, '_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            title='Live Demo'
          >
            <img src={live} alt='live' className='w-1/2 h-1/2' />
          </div>}
        </div>
        <div className='w-full h-[230px]'>
          <img src={image} className='w-full h-full object-cover object-left-top rounded-2xl ' />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[1.5rem]'>{name}</h3>
          <p lassName='mt-2 text-secondary text-[0.875rem]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map(tag => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </div>
  )
}

const Works = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </div>

      <div className='w-full flex'>
        <p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and some have live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  )
}



export default SectionWrapper(Works, 'work')