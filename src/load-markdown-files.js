import Vue from 'vue'
import fm from 'front-matter'
import moment from 'moment'

const blogpostFolder = 'blogposts/'
function kebabCase (str) {
  const result = str.replace(
    /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,
    match => '-' + match.toLowerCase()
  )
  return (str[0] === str[0].toUpperCase())
    ? result.substring(1)
    : result
}

function encodeSlug (str) {
  return encodeURIComponent(String(str).trim().replace(/\s+/g, '-'))
}
function getTitle (str) {
  const trimmedStr = String(str).trim()
  return trimmedStr.substring(trimmedStr.lastIndexOf('/') + 1)
}
function getPath (str) {
  const trimmedStr = String(str).trim()
  if (trimmedStr.indexOf(blogpostFolder) === 0) {
    return kebabCase(trimmedStr.substring(blogpostFolder.length - 1))
  } else {
    return kebabCase(trimmedStr)
  }
}

export const markdownFiles = require.context('./markdown', true, /^\.\/.*\.md$/)
  .keys()
  .map(page => page.slice(2).replace('.md', ''))
  .filter(page => page !== 'Index')
  .map(page => ({
    file: page + '.md',
    title: getTitle(page),
    slug: getPath(page),
    path: encodeSlug(getPath(page)),
    isBlogPost: page.indexOf(blogpostFolder) === 0
  }))
for (const index in markdownFiles) {
  import(
    './markdown/' + markdownFiles[index].file
  ).then(comp => {
    const fmContent = fm(Vue.component(markdownFiles[index].title, comp.default))
    markdownFiles[index].body = fmContent.body
    markdownFiles[index].attributes = fmContent.attributes
    markdownFiles[index].sortingDate = moment(String(markdownFiles[index].attributes.date)).format('YYYYMMDD')
    markdownFiles[index].displayDate = moment(String(markdownFiles[index].attributes.date)).format('DD/MM/YYYY')
  })
}
