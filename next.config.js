module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import remarkImages from 'remark-images'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      remarkImages, // без remark-copy-linked-files
    ],
    rehypePlugins: [],
  }
})
