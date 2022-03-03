/* pages/_app.js */
import '../styles/globals.css'
import { useState } from 'react'
import Link from 'next/link'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from "../components/SidebarData"
import '../components/Sidebar.css'
import '../styles/App.css'
import { IconContext } from 'react-icons';

function MyApp({ Component, pageProps }) {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link href='/' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{ color: '#fff' }}/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link href='/' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href={item.path}><a>{item.icon}{item.title}</a></Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp