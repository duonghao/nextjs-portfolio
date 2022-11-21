import Head from 'next/head'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import ImageBanner from '../components/imagebanner'
import Posts from '../components/posts'
import JobCard from '../components/jobcard'
import SkillCard from '../components/skillcard'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className='px-96 h-screen bg-zinc-50'>
      <div className=' bg-white h-full py-4'>
        <div>
          <Navbar></Navbar>
          <div className='my-16'>
            <Hero></Hero>
          </div>
          <div className='-mx-32 gap-16 my-16'>
            <ImageBanner></ImageBanner>
          </div>
          <div className='my-16 px-16 flex gap-16'>
            <div className='flex-1'>
              <Posts></Posts>
            </div>
            <div className='flex-1 flex flex-col gap-4'>
              <div>
                <JobCard></JobCard>
              </div>
              <div>
                <SkillCard></SkillCard>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
