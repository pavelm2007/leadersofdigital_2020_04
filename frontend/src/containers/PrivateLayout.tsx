import React, {useState} from 'react'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.min.css'
import '../assets/css/over.css'
import {PageHeader} from '../components/headers'
import {PageSideBar} from '../components/sidebars'
import {PageBreadcrumbs} from '../components/breadcrumbs'

const PrivateLayout = (props: { children: any }) => {
  const [miniSideBar, setMiniSideBar] = useState<string>('')
  const toggleMiniSideBar = () => {
    const cssMini = 'mini-sidebar'
    if (miniSideBar === cssMini) {
      setMiniSideBar('')
    } else {
      setMiniSideBar(cssMini)
    }
  }
  return (
    <div id="main-wrapper" className={miniSideBar}>
      <PageHeader onMiniSideBar={toggleMiniSideBar}/>
      <PageSideBar/>
      <div className="page-wrapper">
        <PageBreadcrumbs/>
        {props.children}
        <footer className="footer text-center">
          All Rights Reserved by Matrix-admin. Designed and Developed by <a href="https://wrappixel.com">WrapPixel</a>.
        </footer>
      </div>
    </div>
  )
}

export default PrivateLayout
