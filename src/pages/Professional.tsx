function Professionnal() {
  return (
    <>
      <h1 className='text-4xl font-bold mb-6'>Mon parcours professionnel</h1>

      <div id='project'>
        <h3 className='underline underline-offset-2 font-semibold text-xl mb-2'>
          Mon projet professionnel
        </h3>

        <p className='indent-4 text-justify'>
          J&apos;aimerais poursuivre mes études de développement web à
          l&apos;école 42 au Havre, ou à Épitech à Lille. Après mes études,
          j&apos;aimerais travailler dans une boite en tant que développeur web
          (frontend/backend/fullstack), et plus tard travailler en freelance
          lorsque j&apos;aurais les capacités pour faire cela.
        </p>
      </div>

      <hr className='my-6' />

      <div id='socials'>
        <h3 className='underline underline-offset-2 font-semibold text-xl mb-2'>
          Mes réseaux
        </h3>

        <p className='indent-4 text-justify'>
          J&apos;ai actuellement mon réseau{' '}
          <a
            href='https://www.linkedin.com/in/nathan-caron/'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            LinkedIn
          </a>{' '}
          qui regroupe toutes mes formations, et expériences professionnelles.
        </p>
      </div>

      <hr className='my-6' />

      <div id='formation'>
        <h3 className='underline underline-offset-2 font-semibold text-xl mb-2'>
          Ma formation actuelle
        </h3>

        <p className='indent-4 text-justify'>
          Je suis actuellement en BTS SIO (Services Informatiques aux
          Organisations) pour pouvoir découvrir de nouveaux languages, et
          technologies. Je suis à{' '}
          <a
            href='https://www.gastonberger.fr/'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            Gaston Berger
          </a>
          , à Lille. J'y ai pris l'option SLAM qui est orienté dans le
          développement web et application.
          <br />
          <br />
          Durant ma première année j'ai pratiqué plusieurs matières dans
          l'informatique, comme du SLAM, SISR (orienté réseaux), de la
          Cybersécurité, ainsi que des Activités Professionnels (ce sont des
          gros projets de programmation en groupe).
          <br />
          <br />
          <strong>En SLAM j'ai appris:</strong>
          <br />- Dart pour des applications mobiles avec Flutter
          <br />- C# pour des applications client lourds
          <br />- Javascript côté navigateur
          <br />- PHP avec intégration d'une base de donnée MySQL
          <br />- Les bases du JAVA
          <br />- Gestion de base de données
          <br />
          <br />
          <strong>En SISR j'ai appris:</strong>
          <br />- Créer des machines virtuels
          <br />- Mettre en place un Active Directory sur Windows
          <br />- Installer des RAIDS
          <br />
          <br />
          <strong>En Cybersécurité j'ai appris:</strong>
          <br />- Créer une machine Kali-Linux pour déchiffrer des mots de passe
          <br />- Le chiffrement des mots de passe
          <br />
          <br />
          J'ai choisi de faire ma deuxième année en alternance, en gardant
          l'option SLAM pour en apprendre d'avantage dans le développement web
          et application. En SLAM, j'apprends actuellement le C# pour la
          création d'applications client lourd. Ainsi que le Dart pour des
          applications mobiles.
        </p>
      </div>

      <hr className='my-6' />

      <div id='experience'>
        <h3 className='underline underline-offset-2 font-semibold text-xl mb-2'>
          Mon expérience professionnel actuelle
        </h3>

        <p className='indent-4 text-justify'>
          Avant d'intégrer l'entreprise, j'ai dû me former au langage Ruby. Puis
          lorsque je suis arrivé chez{' '}
          <a
            href='https://click2buy.com/'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            Click2Buy
          </a>
          , j'ai commencé une formation RubyOnRails qui allait m'être utile pour
          différents projets comme le BackOffice.
          <br />
          <br />
          Une fois ma formation fini, j'ai pu commencer à traiter des tickets
          que je consultes sur Jira, qui est un outil de gestion de projet. J'ai
          pu pour implémenter des nouvelles fonctionnalités, ou corriger des
          bugs sur le BackOffice, et le Widget que l'entreprise vend à ses
          clients. Niveau technologies, je travaille en Ruby avec RubyOnRails
          (côté backend), Javascript avec Vuejs (côté frontend). J'ai déjà pas
          mal contribué à plusieurs projets/tickets, ainsi que à assister à
          beaucoup de réunions. J'ai également pu faire mon premier séminaire
          pour revoir toute l'année 2022.
        </p>
      </div>
    </>
  )
}

export default Professionnal
