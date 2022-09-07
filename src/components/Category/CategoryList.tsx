import React, { FunctionComponent } from 'react'
import Category from './CategoryList.style'
import { Link } from 'gatsby'

type CategoryListProps = {
  categories: string[]
}

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  categories
}) {
  return (
    <div>
      {
        categories.map((category: string) => {
          return (
            <Category key={category}>
              <Link to={`/category/${category}`}>{category}</Link>
            </Category>
          );
        })
      }
    </div>
  )
}

export default CategoryList