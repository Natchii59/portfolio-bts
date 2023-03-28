import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export interface LinkType {
  name: string
  slug: string
}

export const links: LinkType[] = [
  {
    name: 'Expériences',
    slug: 'experiences'
  },
  {
    name: 'Compétences',
    slug: 'competences'
  },
  {
    name: 'Veille',
    slug: 'monitoring'
  }
]

export interface HomeSocialType {
  name: string
  url: string
  icon: JSX.Element
}

export const homeSocials: HomeSocialType[] = [
  {
    name: 'Github',
    url: 'https://github.com/Natchii59',
    icon: <FaGithub />
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nathan-caron/',
    icon: <FaLinkedin />
  },
  {
    name: 'Mail',
    url: 'mailto:contact@natchi.fr',
    icon: <FaEnvelope />
  }
]
