import React, { FunctionComponent } from 'react'
import {
  ContentTitle,
  ContentDate,
  DescriptionWrappper,
} from './Description.style'
import CategoryList from 'components/Category/CategoryList'

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
      <DescriptionWrappper>
        <CategoryList categories={categories} />
        <ContentTitle>{title}</ContentTitle>
        <ContentDate>{date} &middot; {timeToRead} min read</ContentDate>
      </DescriptionWrappper>
      <hr />
    </>
  )
}

export default Description