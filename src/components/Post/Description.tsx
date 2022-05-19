import React, { FunctionComponent } from 'react'
import {
  ContentTitle,
  ContentDetails,
  ContentDate,
  Line
} from './Description.style'
import CategoryList from 'components/Post/CategoryList'

type DescriptionProps = {
  title: string
  date: string
  categories: string[]
}

const Description: FunctionComponent<DescriptionProps> = function ({
  title, date, categories
}) {
  return (
    <>
      <ContentTitle>{title}</ContentTitle>
      <ContentDetails>
        <ContentDate>{date}</ContentDate>
        <CategoryList categories={categories} />
      </ContentDetails>
      <Line />
    </>
  )
}

export default Description