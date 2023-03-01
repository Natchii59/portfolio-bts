import { NavLink } from 'react-router-dom'
import { links } from '../lib/datas'
import BurgerMenu from './BurgerMenu'

function Appbar() {
  return (
    <nav className='p-4 w-full fixed inset-x-0 top-0 backdrop-blur-md z-40'>
      <div className='max-w-6xl mx-auto flex items-center justify-between gap-3 sm:gap-5'>
        <NavLink
          to='/'
          className='text-2xl focus-visible:outline-none font-bold'
        >
          Nathan Caron
        </NavLink>

        <div className='hidden md:flex items-center gap-4'>
          {links.map((l, i) => (
            <NavLink
              to={l.slug}
              key={i}
              className={({ isActive }) =>
                `hover:underline focus-visible:outline-none focus-visible:underline ${
                  isActive ? 'underline' : ''
                }`
              }
            >
              {l.name}
            </NavLink>
          ))}
        </div>

        <div className='flex-1' />

        <BurgerMenu />
      </div>
    </nav>
  )
}

export default Appbar
