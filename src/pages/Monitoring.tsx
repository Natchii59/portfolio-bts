export function Monitoring() {
  return (
    <>
      <h1 className='text-4xl font-bold mb-6'>Ma veille informatique</h1>

      <p className='mb-6'>
        J'ai choisi de faire ma veille informatique sur le sujet du
        développement web. J'ai choisi ce sujet car c'est un sujet qui
        m'intéresse beaucoup et que j'apprends depuis que j'ai commencé à
        apprendre à coder. J'ai décidé de faire ma veille sur ce sujet car je
        pense que c'est un sujet qui va évoluer beaucoup dans les années à
        venir. J'ai choisi de faire ma veille sur{' '}
        <span className='font-semibold'>Feedly</span> car c'est un site qui est
        très utilisé et qui est très complet.
      </p>

      <a
        href='https://feedly.com/i/my'
        target='_blank'
        className='text-lg font-semibold hover:underline'
      >
        Ma veille sur Feedly
      </a>
      <img
        src='/monitoring.png'
        alt='Monitoring'
        className='mb-6 border border-black rounded-lg shadow-md'
      />

      <p className='text-lg font-semibold hover:underline'>
        Les articles que j'ai choisi de lire
      </p>
      <img
        src='/monitoring-sujets.png'
        alt='Sujets'
        className='mb-6 border border-black rounded-lg shadow-md w-72'
      />
    </>
  )
}
