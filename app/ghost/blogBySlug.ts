import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI(
  {
    url: process.env.NEXT_PUBLIC_GHOST_API_URL!,
    key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY!,
    version: 'v5.0',
    makeRequest: async ({
      url, method, params, headers,
    }: any) => {
      const apiUrl = new URL(url)
      Object.keys(params).map((key) => apiUrl.searchParams.set(key, params[key]))

      return fetch(apiUrl.toString(), { method, headers })
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}, response data: ${await res.text()}`)
          }

          return { data: await res.json() }
        })
        .catch((error) => {
          console.error('Fetch error:', error)
        })
    },

  },
)

export async function getGhostBlogsBySlug(slug: string) {
  return api.posts.read({
    slug: slug
  }).catch((e: any) => { console.log(e) })
}
