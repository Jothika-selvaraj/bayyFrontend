'use client'

import React from 'react'
import BlogList from "@/Components/BlogList";

import { ToastContainer } from "react-toastify";
import Header from '@/Components/Common/Header';
import Footer from '@/Components/Common/Footer';

const page = () => {
  return (
    <div><ToastContainer theme="dark"/>
    <Header />
    <BlogList/>
    <Footer />
  </div>
  )
}

export default page