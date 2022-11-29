import React from 'react'
import { jobs } from '../constants'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import CardLayout from './cardlayout'

const JobCard = () => {
  return (
    <CardLayout icon={faBriefcase} title='Work'>
        <ul>
            {jobs.map((job, index) => (
                <li
                    key={job.id}
                >
                    <div className='flex items-center my-4'>
                        <div className='w-16 h-8 mr-4 relative'>
                            <job.Logo fill className='fill-black'></job.Logo>
                        </div>
                        <div className='flex-1'>
                            <h3 className='text-md font-semibold pr-36'>
                                {job.company}
                            </h3>
                            <div className='flex justify-between gap-8'>
                                <p className='flex-1 text-s font-thin'>{job.position}</p>
                                <p className='flex-0 text-s font-thin w-24'>{job.date}</p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </CardLayout>
  )
}

export default JobCard