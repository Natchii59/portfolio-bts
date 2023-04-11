import { Link } from 'react-router-dom'

const datas = [
  {
    name: 'Alternance chez Click2Buy',
    date: "Sep. 2022 - Aujourd'hui",
    link: 'alternance-c2b'
  },
  {
    name: 'Stage chez PicwicToys',
    date: 'Mai - Juin 2022',
    link: 'stage-picwictoys'
  },
  {
    name: 'BTS SIO (SLAM) - Gaston Berger',
    date: "Sep. 2021 - Aujourd'hui",
    link: 'bts-sio'
  },
  {
    name: 'Baccalauréat Général',
    date: 'Juil. 2021',
    link: ''
  }
]

export function Experiences() {
  return (
    <>
      <h1 className='text-4xl font-bold mb-6'>Mon parcours professionnel</h1>

      <div>
        <h3 className='underline underline-offset-2 font-semibold text-xl mb-2'>
          Mon projet professionnel
        </h3>

        <p className='indent-4 text-justify'>
          J&apos;aimerais poursuivre mes études de développement web à
          l&apos;école d&apos;Epitech à Lille. Après mes études, j&apos;aimerais
          travailler dans une boite en tant que développeur web
          (frontend/backend/fullstack), et plus tard travailler en freelance
          lorsque j&apos;aurais les capacités pour faire cela.
        </p>
      </div>

      <hr className='my-6' />

      <div>
        <h3 className='underline underline-offset-2 font-semibold text-xl mb-2'>
          Télécharger mon CV
        </h3>

        <a href='/CV.pdf' download className='py-2 px-4 bg-zinc-200 rounded-lg'>
          Télécharger ici
        </a>
      </div>

      <hr className='my-6' />

      {datas.map((data, i) => (
        <div
          key={i}
          className='relative pl-6 pb-6 border-l-2 border-black text-left w-full group before:w-4 before:h-4 before:bg-zinc-100 before:border before:border-black before:shadow before:absolute before:top-0 before:-left-[0.57rem] before:rounded-full before:transition-colors before:duration-500 last:border-transparent focus-visible:outline-none'
        >
          <Link to={data.link}>
            <p className='font-semibold'>{data.date}</p>

            <p className='text-lg font-semibold'>{data.name}</p>
          </Link>
        </div>
      ))}
    </>
  )
}
