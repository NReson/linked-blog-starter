import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import remarkImages from 'remark-images'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: true },
    // другие поля
  },
}))

export default makeSource({
  contentDirPath: 'content', // путь к md
  documentTypes: [Post],
  markdown: {
    remarkPlugins: [remarkGfm, remarkImages],
  },
})
