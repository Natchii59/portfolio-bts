import { homeSocials } from '../lib/datas'

export function Home() {
  return (
    <div className='p-4 shadow-md rounded-md bg-zinc-100 flex items-start gap-4'>
      <div>
        <h1 className='text-4xl font-bold'>Bienvenue sur mon Portfolio</h1>
        <p className='mb-6'>Développeur/Étudiant en Alternance</p>

        <h3 className='underline underline-offset-2 font-semibold text-xl'>
          À propos de moi
        </h3>
        <p className='mt-2 mb-6 px-1 indent-4 text-justify'>
          Je suis étudiant en alternance et développeur FullStack. J&apos;habite
          à Lille. J&apos;ai commencé à programmer en 2019 et depuis, cela est
          devenu ma passion. J&apos;adore coder, pouvoir créer du contenu sur
          internet. Je suis développeur FullStack, même si je penche plutôt du
          côté Backend. J&apos;aime aussi faire du design même si ce n&apos;est
          pas mon point fort. En ligne, ou pas, j&apos;écoute beaucoup de
          musique. J&apos;ai réalisé plusieurs petits projets pour
          m&apos;exercer dans plusieurs technologies. Je ne suis jamais à court
          d&apos;idées.
        </p>

        <h3 className='underline underline-offset-2 font-semibold text-xl'>
          Mes réseaux
        </h3>
        <div className='mt-2 mb-6 px-1 flex flex-col items-start'>
          {homeSocials.map((social, i) => (
            <a
              href={social.url}
              target='_blank'
              rel='noreferrer'
              key={i}
              className='flex items-center justify-center mb-2 gap-1 group focus-visible:outline-none'
            >
              {social.icon}
              <span className='group-hover:underline'>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <img src='/octocat.gif' alt='Octocat Gif' className='w-60 mt-8' />
    </div>
  )
}
