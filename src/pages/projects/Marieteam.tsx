function MarieTeam() {
  return (
    <>
      <h1 className='text-4xl font-bold mb-6'>
        Compétences du projet MarieTeam
      </h1>

      <div className='w-full flex flex-col gap-4'>
        <div className='p-2 border border-zinc-400 rounded-lg'>
          <h3 className='text-xl font-semibold'>
            1. Gérer le patrimoine informatique
          </h3>
          <p>
            Mettre en place et vérifier les niveaux d’habilitation associés à un
            service. Nous avons effectué des habilitations utilisateur au sein
            de la base de données de MarieTeam, permettant à certains
            utilisateurs d’avoir uniquement les droits de visualisation ou de
            modification des données.
          </p>
        </div>
        <div className='p-2 border border-zinc-400 rounded-lg'>
          <h3 className='text-xl font-semibold'>
            2. Développer la présence en ligne de l’organisation
          </h3>
          <p>
            Participer à la valorisation de l’image de l’organisation sur les
            médias. Nous avons mis en place un site web pour l’entreprise
            MarieTeam ainsi qu’une application qui génère des brochures.
            <br />
            Participer à l’évolution d’un site Web exploitant les données de
            l’organisation. Au moyen de notre base de données, nous avons pu
            manipuler les données de l’entreprise MarieTeam afin de rendre le
            site opérationnel et l’automatisation des fonctionnalités.
          </p>
          <img
            src='/diagram-marieteam.png'
            alt='Diagram'
            className='mt-4 rounded-lg'
          />
        </div>
        <div className='p-2 border border-zinc-400 rounded-lg'>
          <h3 className='text-xl font-semibold'>
            3. Travailler en mode projet
          </h3>
          <p>
            Analyser les objectifs et les modalités d’organisation d’un projet.
            Afin de préparer notre projet nous avons constitué des documents tel
            qu’un MCD (Modèle conceptuel des données) et un diagramme de cas
            d’utilisations.
            <br />
            Planifier les activités. Pour organiser au mieux le déroulement de
            la conceptualisation de notre projet nous avons fait le choix de
            travailler par tâches. Chaque séances nous nous sommes attribué des
            missions afin de factoriser le travail. Ainsi lors de la finition de
            notre mission respective nous pouvions aider un membre du groupe
            ayant des difficultés. Sur notre projet Github chaque personne a sa
            branche où il a fait ses modifications, où à la fin de chaque séance
            on rassemble sur la branche principale.
          </p>
          <img
            src='/github-marieteam.png'
            alt='Commits Github'
            className='mt-4 rounded-lg'
          />
        </div>
        <div className='p-2 border border-zinc-400 rounded-lg'>
          <h3 className='text-xl font-semibold'>
            4. Mettre à disposition des utilisateurs un service informatique
          </h3>
          <p>
            Réaliser les tests d’intégration et d’acceptation d’un service. Dans
            l’intégration et l’acceptation de nouveaux services, le code en MVC
            (Modèle Vue Contrôleur) fut d’une aide précieuse. En effet, nous
            avons pu réaliser les tests nécessaires sans qu’il y est d’impact
            sur le reste du site web.
          </p>
        </div>
        <div className='p-2 border border-zinc-400 rounded-lg'>
          <h3 className='text-xl font-semibold'>
            5. Organiser son développement professionnel
          </h3>
          <p>
            Mettre en place son environnement d’apprentissage personnel. À
            plusieurs reprises nous avons été bloqué par des problèmes lors du
            développement du site web et l’application. Pour obtenir des
            solutions nous nous sommes essentiellement servis de documentations
            sur le Web, et des cours.
          </p>
        </div>
      </div>
    </>
  )
}

export default MarieTeam
