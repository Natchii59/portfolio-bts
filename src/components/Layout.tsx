import { Outlet } from 'react-router-dom'
import Appbar from './Appbar'

function Layout() {
  return (
    <>
      <Appbar />

      <div className='pt-20'>
        <div className='p-4'>
          <div className='w-full max-w-6xl mx-auto relative mb-10'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
