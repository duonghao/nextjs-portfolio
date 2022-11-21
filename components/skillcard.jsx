import React from 'react'
import CardLayout from './cardlayout'
import { languages } from '../constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'


const SkillCard = () => {
  return (
   <CardLayout icon={faCode} title='Languages'>
        <ul className='flex gap-4'>
          {languages.map((language, index) => (
            <li
              key={language.id}
            >
              <FontAwesomeIcon icon={language.icon} size='2x'/>
            </li>
          ))}
        </ul> 
    </CardLayout>
  )
}

export default SkillCard