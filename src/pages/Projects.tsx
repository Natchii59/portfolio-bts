const datas = [
  {
    name: 'MarieTeam',
    img: '/marieteam.png',
    description:
      'Projet MarieTeam – Mise en place d’un site web de réservation et de gestion des transports, d’une application client lourd qui permet de générer des brochures.',
    link: '/projects/marieteam'
  },
  {
    name: 'Restorat',
    img: '/restorat.png',
    description:
      'Projet Resto’Rat – Concevoir et développer un site pour le restaurant d’application du lycée.',
    link: '/projects/restorat'
  }
]

export function Projects() {
  return (
    <>
      <h1 className='text-4xl font-bold'>Mes projets</h1>
      <p className='mb-6'>
        Voici les projets que j'ai réalisé au cours de mon BTS
      </p>

      <div className='w-full flex flex-col gap-4'>
        {datas.map((d, i) => (
          <a
            key={i}
            href={d.link}
            className='w-full flex items-center gap-2 p-2 border border-zinc-300 rounded-lg'
          >
            <img
              src={d.img}
              alt={`Banner-${d.name}`}
              className='w-72 rounded-lg'
            />
            <div>
              <h3 className='text-2xl font-semibold'>{d.name}</h3>
              <p>{d.description}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}
