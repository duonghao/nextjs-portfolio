import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faJava, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import CardLayout from './cardlayout'

const SkillCard = () => {
  return (
   <CardLayout icon={faCode} title='Languages'>
        <ul className='flex gap-4'>
          <li>
            <FontAwesomeIcon icon={faReact} size='2x'/>
          </li>
          <li>
            <FontAwesomeIcon icon={faPython} size='2x'/>
          </li>
          <li>
            <FontAwesomeIcon icon={faJava} size='2x'/>
          </li>
          <li>
            <FontAwesomeIcon icon={faSquareJs} size='2x'/>
          </li>
        </ul>
        
    </CardLayout>
  )
}

export default SkillCard