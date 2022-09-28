import React, { FunctionComponent } from 'react'
import {
  BoardWrapper,
  BoardList,
  ListWrapper,
  ListTitle,
  ListContent
} from './MainBoard.style'

const MainBoard: FunctionComponent = function() {
  return (
    <BoardWrapper>
      <BoardList>
        <ListWrapper>
          <ListTitle>Skills</ListTitle>
          <ListContent>JavaScript, TypeScript, React, HTML/CSS, jest, gulp</ListContent>
        </ListWrapper>
      </BoardList>
      <BoardList>
        <ListWrapper>
          <ListTitle>Working</ListTitle>
          <ListContent>IBLeaders (2020.02 - 2022.06)</ListContent>
        </ListWrapper>
      </BoardList>
    </BoardWrapper>
  )
}

export default MainBoard