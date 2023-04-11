function StagePicwicToys() {
  return (
    <>
      <h1 className='text-4xl font-bold'>Stage à PicwicToys</h1>
      <p className='text-xl font-semibold mb-6'>Mai - Juin 2022</p>

      <p className='indent-4 text-justify mb-2'>
        J'ai effectué un stage de 2 mois chez PicwicToys pour la fin de ma
        première année de BTS SIO. J'étais situé à Villeneuve d'Ascq. Lors de
        mon stage j'ai pu découvrir pour la première fois, la programmation dans
        le monde de l'entreprise. J'ai pu apprendre des techniques sur Git pour
        gérer des gros projets en équipe. Ainsi que découvrir l'outil Jira pour
        les tickets de bug ou nouveautés à apporter au site web.
      </p>

      <p className='indent-4 text-justify mb-2'>
        J'étais dans le développement Frontend. Il était composé de VueJS,
        Typescript, et pleins d'autres choses que je n'ai pas eu l'occasion de
        découvrir. J'ai pu prendre en charge pleins de tickets concernant des
        bugs ou bien des nouveautés à mettre en place.
      </p>

      <p className='indent-4 text-justify mb-2'>
        Lors de stage j'ai fait le refonte de la page d'accueil avec une
        intégration d'un nouveau KCMS/CMS. Dans celui-ci il était possible de
        gérer le contenu de la page d'accueil, pour pouvoir mettre plusieurs
        type de composants avec le contenu que l'on souhaitait. J'ai également
        participer à la refonte des fiches produits, de la page panier et de
        paiement, pour intégrer les nouvelles promesses de livraison (livraison
        express, ClickAndCollect, Mondial Relay, etc...).
      </p>

      <p className='indent-4 text-justify mb-2'>
        J'ai eu l'occasion de découvrir également différents pôles dans
        l'entreprise (en dehors de la programmation). Pouvoir aider sur quelques
        requêtes SQL, pour les simplifier et qu'elles soient plus facile à
        comprendre et utiliser.
      </p>

      <p className='indent-4 text-justify mb-6'>
        Pour moi ce stage a été une très bonne première expérience dans le monde
        de l'entreprise, dans le domaine Informatique. J'ai pû découvrir pleins
        d'aspects de la programmation en équipe, et encadré.
      </p>

      <a
        href='https://archive.is/kkpLJ'
        target='_blank'
        className='text-lg font-semibold hover:underline'
      >
        Exemple de l'ancienne page d'accueil
      </a>
      <img
        src='/picwic-home.png'
        alt='Home'
        className='mb-6 border border-black rounded-lg shadow-md'
      />

      <a
        href='https://archive.is/dNq7a'
        target='_blank'
        className='text-lg font-semibold hover:underline'
      >
        Exemple de l'ancienne page produit
      </a>
      <img
        src='/picwic-product.png'
        alt='Product'
        className='mb-6 border border-black rounded-lg shadow-md'
      />
    </>
  )
}

export default StagePicwicToys
