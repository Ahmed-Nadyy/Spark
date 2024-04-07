import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './index.css'
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Thrd from './3rd/Thrd'
import Frth from './Frth/Frth'
import Courses from '../Courses/courses'
import Hero from '../Hero/Hero'
import Header from '../Header/Header'
import Parent from '../lastpart/Parent';
import Footer from '../lastpart/Parent';

export default function Home() {
  return (
    <>
      {/* <header /> */}
      <Header />
      <Hero />
      <Courses />
      <Thrd />
      <Frth />
      <Parent />
      <Footer/>
      {/* <Dashboard/> */}
     
    </>
  )
}
