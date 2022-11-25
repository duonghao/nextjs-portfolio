import Head from 'next/head'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import ImageBanner from '../components/imagebanner'
import Posts from '../components/posts'
import JobCard from '../components/jobcard'
import SkillCard from '../components/skillcard'
import Footer from '../components/footer'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  )
}
