import React from 'react'
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import './homepage.css'

export default function Homepage() {
  const location = useLocation()
  console.log(location)
  return (
    <>
      <div>
        <Header />
        <div className='Home'>
          <Posts />
          <Sidebar />
        </div>
      </div>
    </>
  )
}
