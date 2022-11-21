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
    <div className='flex h-screen w-screen'>
      <div className='flex-1 bg-zinc-50'></div>
      <div className='grow-0 shrink basis-[1280px] bg-white h-full py-4 px-16 flex flex-col gap-16'>
          <Navbar></Navbar>
          <Hero></Hero>
          <ImageBanner></ImageBanner>
          <div className='flex flex-wrap gap-16'>
            <div className='grow shrink-0 basis-96'>
              <Posts></Posts>
            </div>
            <div className='grow shrink-0 basis-96 flex flex-col gap-4'>
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
      <div className='flex-1 bg-zinc-50'></div>
    </div>
  )
}
