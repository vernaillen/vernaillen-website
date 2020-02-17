import PostTest from '../../blogposts/2019/06/01/post-test.md'
import ProgressiveWebApps from '../../blogposts/2019/07/11/progressive-web-apps.md'

export default function () {
  return {
    toc: [],
    frontmatterData: {},
    pages: {
      0: { name: 'Home', path: '/home', icon: 'fas fa-home' },
      1: { name: 'Career', path: '/career', icon: 'fas fa-briefcase' },
      2: { name: 'Blog', path: '/blog', icon: 'fas fa-blog' },
      3: { name: 'Contact', path: '/contact', icon: 'fas fa-at' }
    },
    nrOfPages: 4,
    currentPageName: 'Home',
    currentBlogPostName: '',
    blogPosts: {
      0: { name: 'Post Test', date: '01 June 2019', slug: '2019/06/01/post-test', component: PostTest, thumbnail: '' },
      1: { name: 'Progressive Web Apps', date: '11 July 2019', slug: '2019/07/11/progressive-web-apps', component: ProgressiveWebApps, thumbnail: '' }
    }
  }
}
