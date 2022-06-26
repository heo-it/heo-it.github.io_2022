import React, { FunctionComponent } from 'react'
import {
  ContentTitle,
  ContentDetails,
  ContentDate,
} from './Description.style'
import CategoryList from 'components/Post/CategoryList'

type DescriptionProps = {
  title: string
  date: string
  categories: string[]
  timeToRead: number
}

const Description: FunctionComponent<DescriptionProps> = function ({
  title, date, categories, timeToRead
}) {
  return (
    <>
      <ContentTitle>{title}</ContentTitle>
      <ContentDetails>
        <ContentDate>{date} &middot; {timeToRead} min read</ContentDate>
        <CategoryList categories={categories} />
      </ContentDetails>
      <hr />
    </>
  )
}

export default Description