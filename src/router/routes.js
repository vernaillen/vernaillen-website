
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/career', component: () => import('pages/Career.vue') },
      { path: '/blog', component: () => import('pages/BlogOverview.vue') },
      { path: '/blog/tag/:tag', component: () => import('pages/BlogOverview.vue'), props: true },
      { path: '/blog/*', component: () => import('pages/MarkdownPage.vue'), props: true },
      { path: '/page/*', component: () => import('pages/MarkdownPage.vue'), props: true },
      { path: '/contact', component: () => import('pages/Contact.vue') },
      { path: '', redirect: '/home' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
