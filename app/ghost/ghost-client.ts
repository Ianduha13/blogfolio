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
export async function getPosts() {
  return await api.posts
    .browse({
      include: ["tags", "authors"],
      limit: 10
    })
    .catch(err => {
      throw new Error(err)
    });
}
export async function getFeaturedBlogs() {
  return await api.posts
    .browse({
      filter: "tags:Featured",
      include: ["tags", "authors"],
      limit: 10
    })
    .catch(err => {
      throw new Error(err)
    });
}
export async function getBlogsByTag(tag: string) {
  return await api.posts
    .browse({
      filter: `tags:${tag}`,
      include: ["tags", "authors"],
      limit: 10
    })
    .catch(err => {
      throw new Error(err)
    });
}




export async function getSinglePost(postSlug: string) {
  return await api.posts
    .read({
      slug: postSlug
    }, { include: ["tags", "authors"] })
    .catch(err => {
      console.error(err);
    });
}

export async function getNavigation() {
  return await api.settings.browse()
}