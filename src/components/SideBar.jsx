import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/sampleData';
import { useStateContext } from '../contexts/ContextProvider';

const SideBar = () => {

  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  // closing sidebar for link clicks & returning to the home page

  function handleCloseSideBar() {
    if (activeMenu && screenSize <= 900) setActiveMenu(false);
  }

  // link status styling

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  
  return (
    // top left logo of sidebar
    <div className = 'ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className = 'flex justify-between items-center'>
          <Link to = '/' onClick = {handleCloseSideBar()} className = 'items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-gray-900'>
            <SiShopware /> <span>Amir McCutchen</span>
          </Link>
          <TooltipComponent 
          content = 'menu'
          position = 'BottomCenter'>
            <button 
            type = 'button'
            onClick={() => {setActiveMenu((prevActiveMenu) => !prevActiveMenu)}}
            className = 'text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>

        {/* sidebar navigation, looping through the links in the sample data */}

        <div className = 'mt-10'>
          {links.map(link => (
            <div key = {link.title}>
              <p className = 'text-gray-400 m-3 mt-4 uppercase'>
              {link.title}
              </p>
              {link.links.map(url => (
                <NavLink
                to = {`/${url.name}`}
                key = {url.name}
                onClick = {handleCloseSideBar()}

                // shows user which page they are on (highlighted on sidebar)

                style = {({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : ''
                })}
                
                className = {({ isActive }) => isActive ? activeLink : normalLink}>
                  {url.icon}
                  <span className = 'capitalize'>
                    {url.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default SideBar