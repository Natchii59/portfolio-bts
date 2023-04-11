import Appbar from './Appbar'

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Appbar />

      <div className='pt-20'>
        <div className='p-4'>
          <div className='w-full max-w-6xl mx-auto relative mb-10'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
