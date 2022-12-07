import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { NavigationBar, Footer, SideBar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, LineChart, Kanban, Finance} from './pages';
import './styling/App.css';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {

  const  { activeMenu } = useStateContext()   // implements context api on the sidebar for the entire app

  return (
    <div>

      {/* settings button */}

      <BrowserRouter>
        <div className = 'flex relative dark:bg-main-dark-bg'>
          <div className = 'fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content = 'Settings' position = 'Top'>
              <button 
              type = 'button'
              className = 'text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
              style={{ background: 'blue', borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* sidebar */}

          {activeMenu ? (
            <div className = 'w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <SideBar />
            </div>
          ) : (
            <div className = 'w-0 dark: bg-secondary-dark-bg'>
               <SideBar />
            </div>
          )}
          <div className = {
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${ activeMenu ? 'md:ml-72' : 'flex-2' }`
            }>
              <div className = 'fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <NavigationBar />
              </div>
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              
              <Route path = '/' element = {<Ecommerce />} />
              <Route path = '/ecommerce' element = {<Ecommerce />} />

              {/* Pages */}

              <Route path = '/orders' element = {<Orders />} />
              <Route path = '/employees' element = {<Employees />} />
              <Route path = '/customers' element = {<Customers />} />

              {/* Apps */}

              <Route path = '/kanban' element = {<Kanban />} />
              <Route path = '/editor' element = {<Editor />} />
              <Route path = '/calendar' element = {<Calendar />} />
              <Route path = '/color-picker' element = {<ColorPicker />} />

              {/* Charts */}

              <Route path = '/line' element = {<LineChart />} />
              <Route path = '/area' element = {<Area />} />
              <Route path = '/bar' element = {<Bar />} />
              <Route path = '/pie' element = {<Pie />} />
              <Route path = '/finance' element = {<Finance />} />
              <Route path = '/color-mapping' element = {<ColorMapping />} />
              <Route path = '/pyramid' element = {<Pyramid />} />
              <Route path = '/stacked' element = {<Stacked />} />


            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;