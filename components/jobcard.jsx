import React from 'react'

const jobs = [
    {
        id: 'job-1',
        company: 'Defence Science and Technology Group (DSTG)',
        position: 'Small Satellites Experimentation Team Placement',
        date: '2017-2019',
    },
    {
        id: 'job-2',
        company: 'Babcock',
        position: 'Mechanical Engineer',
        date: '2020-2022',
    },
];

const JobCard = () => {
  return (
    <div className='p-4 border-2 rounded-md'>
        <h1 className='mb-4'>Work</h1>
            <ul>
                {jobs.map((job, index) => (
                    <li
                        key={job.id}
                    >
                        <div className='flex items-center my-4'>
                            <div className='w-8 h-8 border-2 rounded-full mr-8'>
                            </div>
                            <div className='flex-1'>
                                <h1 className='text-md font-semibold'>
                                    {job.company}
                                </h1>
                                <div className='flex justify-between'>
                                    <p className='text-s font-thin'>{job.position}</p>
                                    <p className='text-s font-thin'>{job.date}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default JobCard