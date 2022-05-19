export type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
}

export type PostListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    html: string
    frontmatter: PostFrontmatterType
  }
}