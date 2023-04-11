function AlternanceC2B() {
  return (
    <>
      <h1 className='text-4xl font-bold'>Alternance à Click2Buy</h1>

      <p className='text-xl font-semibold mb-6'>
        Septembre 2022 - Aujourd&apos;hui
      </p>

      <p className='indent-4 text-justify mb-2'>
        Click2Buy est une entreprise qui propose des services de Where 2 Buy à
        d'autres entreprises. Celle-ci propose des widgets que les clients
        implémentent sur leur site web où ils vendent leurs produits. Le widget,
        une fois implémenté, permet aux clients de Click2Buy de trouver les
        magasins qui vendent leurs produits, grâce à la localisation de
        l'utilisateur. Les données qui sont récupérées, sont des données en
        temps réel (concernant les stocks).
      </p>

      <p className='indent-4 text-justify mb-2'>
        Avant d'intégrer l'entreprise, j'ai dû me former au langage Ruby. Puis
        lorsque je suis arrivé chez Click2Buy, j'ai commencé une formation
        RubyOnRails qui allait m'être utile pour différents projets comme le
        BackOffice.
      </p>

      <p className='indent-4 text-justify mb-4'>
        Une fois ma formation fini, j'ai pu commencer à traiter des tickets
        (Jira) pour implémenter des nouvelles fonctionnalités, ou corriger des
        bugs sur le BackOffice, et le Widget que l'entreprise vend à ses
        clients. Je travaille en Ruby avec RubyOnRails (côté backend),
        Javascript avec Vuejs (côté frontend).
      </p>

      <a
        href='https://widget.clic2buy.com/6222-6eca33f?locale=fr-FR'
        target='_blank'
        className='text-lg font-semibold hover:underline'
      >
        Exemple de Widget
      </a>
      <img
        src='/c2b-widget.png'
        alt='Widget'
        className='mb-6 border border-black rounded-lg shadow-md'
      />

      <p className='text-lg font-semibold'>Exemple de ticket Jira</p>
      <img
        src='/c2b-jira.png'
        alt='Jira'
        className='mb-6 border border-black rounded-lg shadow-md'
      />
    </>
  )
}

export default AlternanceC2B
