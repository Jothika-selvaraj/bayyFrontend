'use client'

import Footer from '@/Components/Common/Footer';
import Header from '@/Components/Common/Header';
import Banner from '@/Components/Home/Banner';
import Blog from '@/Components/Home/Blog';
import Faq from '@/Components/Home/Faq';
import Section1 from '@/Components/Home/Section1';
import Section2 from '@/Components/Home/Section2';
import Section3 from '@/Components/Home/Section3';
import Testimonials from '@/Components/Home/Testimonials';
import 'react-toastify/dist/ReactToastify.css';




export default function Home() {
  return (
    <>
    <Header/>
     <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <Caurosel /> */}
      <Testimonials />
      <Blog />
      <Faq />
      {/* <Callfor /> */}
      <Footer />
    </>
  )
}
