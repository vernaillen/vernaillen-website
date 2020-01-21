export default function () {
  return {
    toc: [],
    pages: {
      0: { name: 'Home', path: '/home', icon: 'fas fa-home' },
      1: { name: 'Career', path: '/career', icon: 'fas fa-briefcase' },
      2: { name: 'Contact', path: '/contact', icon: 'fas fa-at' }
    },
    nrOfPages: 3,
    currentPageName: 'Home',
    currentBlogPostName: ''
  }
}
