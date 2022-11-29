import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    <div className='pr-[20%]'>
        <div className=''>
            <div className='flex flex-col gap-4'>
                <h1>
                    Mechanical engineer by day, aspiring software engineer by night.
                </h1>
                <p>
                    I'm Hao, a mechanical and software engineer based in Adelaide, Australia.
                </p>
                <div className='flex justify-start gap-4'>
                    <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    <FontAwesomeIcon icon={faGithub} size='2x'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero