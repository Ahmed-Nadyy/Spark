import React from 'react'
import Thrd from './3rd/Thrd'
import Frth from './Frth/Frth'
import Courses from '../Courses/courses'
import Hero from '../Hero/Hero'
import Header from '../Header/Header'

export default function Home() {
  return (
    <>
      {/* <header /> */}
      <Header />
      <Hero />
      <Courses />
      <Thrd />
      <Frth />
     
    </>
  )
}
