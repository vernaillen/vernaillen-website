
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/career', component: () => import('pages/Career.vue') },
      { path: '/md', component: () => import('pages/MarkdownTest.vue') },
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
