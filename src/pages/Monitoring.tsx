import { useEffect, useState } from 'react'
import { FaThLarge, FaThList } from 'react-icons/fa'

function Monitoring() {
  const [listMode, setListMode] = useState<boolean>(false)

  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const setListModeHandler = (): void => {
    setListMode(!listMode)
  }

  useEffect(() => {
    const controller = new AbortController()

    const init = async () => {
      setLoading(true)

      const url = new URL('https://newsapi.org/v2/everything')
      url.searchParams.append('q', 'web development')
      url.searchParams.append('language', 'en')
      url.searchParams.append('sortBy', 'relevancy')
      url.searchParams.append('pageSize', '20')
      url.searchParams.append('page', '1')

      try {
        const result = await fetch(url, {
          signal: controller.signal,
          method: 'GET',
          headers: {
            'X-Api-Key': import.meta.env.VITE_APP_MONITORING_API_KEY
          },
          mode: 'cors'
        })

        const data = await result.json()

        if (data.error) return setError(data.error)

        setData(data.articles)
        setLoading(false)
      } catch (error: any) {
        if (error.name === 'AbortError') return
        console.error(error)
      }
    }

    init()

    return () => {
      controller.abort()
      setData([])
      setLoading(false)
      setError(null)
    }
  }, [])

  return (
    <>
      <div className='mb-6 flex items-center justify-between'>
        <div>
          <h1 className='text-4xl font-bold tracking-wide'>
            Ma veille informatique
          </h1>
          <p>Sujet: Le développement Web</p>
        </div>

        <button
          onClick={setListModeHandler}
          className='hidden md:flex items-center gap-1 p-1 text-xl rounded-md border border-zinc-400 dark:border-zinc-700'
        >
          <div className={`${listMode ? 'bg-zinc-200' : ''} p-1.5 rounded-md`}>
            <FaThList />
          </div>
          <div className={`${listMode ? '' : 'bg-zinc-200'} p-1.5 rounded-md`}>
            <FaThLarge />
          </div>
        </button>
      </div>

      <div
        className={
          listMode
            ? 'grid grid-cols-1 gap-4'
            : 'grid grid-cols-1 md:grid-cols-2 gap-4'
        }
      >
        {loading
          ? [...Array(20)].map((_, i) => (
              <div
                key={i}
                className='p-4 border rounded-md border-zinc-400 dark:border-zinc-700 h-44'
              >
                <div className='flex flex-col justify-between animate-pulse h-full'>
                  <div className='flex flex-col gap-3'>
                    <div className='grid grid-cols-3'>
                      <div className='h-3 bg-zinc-400 dark:bg-zinc-700 rounded-xl col-span-2'></div>
                    </div>

                    <div className='grid grid-cols-3 gap-2'>
                      <div className='h-2 bg-zinc-400 dark:bg-zinc-700 rounded-xl col-span-3'></div>
                      <div className='h-2 bg-zinc-400 dark:bg-zinc-700 rounded-xl col-span-3'></div>
                      <div className='h-2 bg-zinc-400 dark:bg-zinc-700 rounded-xl col-span-3'></div>
                      <div className='h-2 bg-zinc-400 dark:bg-zinc-700 rounded-xl col-span-2'></div>
                    </div>
                  </div>

                  <div className='grid grid-cols-3'>
                    <div className='h-2 bg-zinc-400 dark:bg-zinc-700 rounded-xl col-span-1'></div>
                  </div>
                </div>
              </div>
            ))
          : data.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target='_blank'
                className='p-4 border rounded-md border-zinc-400 dark:border-zinc-700 group flex flex-col justify-between'
              >
                <div>
                  <h2 className='text-xl font-semibold group-hover:underline'>
                    {article.title}
                  </h2>

                  <p className='py-2'>{article.description}</p>
                </div>

                <p className='text-sm font-medium'>
                  Source: {article.source.name} -{' '}
                  {!!article.publishedAt &&
                    new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric'
                    })}
                </p>
              </a>
            ))}
      </div>
    </>
  )
}

export default Monitoring
