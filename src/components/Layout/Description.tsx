import React, { FunctionComponent } from 'react'
import DescriptionWrapper from './Description.style'

type DescriptionProps = {
  title: string,
  description: string
}

const Description: FunctionComponent<DescriptionProps> = function ({
  title, description
}) {

  return (
    <DescriptionWrapper>
      <h1>{ title }</h1>
      <p>{ description }</p>
    </DescriptionWrapper>
  )
}

export default Description