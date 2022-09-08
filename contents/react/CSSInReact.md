---
date: '30 Mar, 2022'
title: 'CSS in React'
menu: 'react'
categories: ['React']
summary: 'React의 다양한 css 사용 방법 정리'
thumbnail: './image/CSSinReact.png'
---
# CSS in React

React로 개발 중 다양한 css 사용 방법이 존재한다.

물론 개발자 입장에서 많은 선택지가 있다는게 좋긴 하지만 재사용 여부, 퍼포먼스 등 상황에 따라 올바르게 사용하기 위해 특징에 따라 정리해보았다.

## lnline Style

일반적인 방식으로 기존에 사용하던 것과 같이 태그에 직접 style을 적용하는 방법이다. 

인라인 스타일로 적용하는 경우 일일히 수정해줘야 하고, 리액트의 경우 state가 변경될 때 마다 렌더링 된다는 단점이 있다.

하지만, 인라인 스타일링의 경우 우선순위가 가장 높다는 장점이 있다.

```jsx
<h1 style={{ padding: '10px' }}>
	하이요 :)
</h1>
```

## **External Stylesheet**

일반적인 css 파일에 스타일을 적용하는 방법으로 기존에 사용하던것과 마찬가지로 css파일을 import 해주면 된다 !

```jsx
import './App.css';

function App() {
	return (
		<>
			<h1 className="h1-styled">하이요 :)</h1>
		</>
	)
}

```

## **CSS Modules**

위에서 소개한 외부 스타일 시트를 사용하는 방법은 React 앱의 규모가 커짐에 따라 css 이름이 겹치고 지정하는데 어려움을 겪을 수 있다. 기본적으로 글로벌 네임 스페이스(global namespace)를 사용하기 때문에, 만약 2개의 css 파일에 동일한 클래스에 대한 스타일이 적용되어 있다면, 해당 클래스가 적용된 엘리먼드는 2개의 스타일에 모두 영향을 받게 된다.

이 문제를 해결하기 위한 방법으로 css파일에 고유의 네임 스페이스를 부여해주는 css 모듈 (CSS Modules)이라는 기법이 있다. React 컴포넌트에 Css 모듈을 통해서 스타일을 적용하는 방법은 다음과 같다.

- `.css` 이 아닌 `.module.css` 확장자를 사용해야함.
- `.module.css` import시 해당 파일의 확장자를 모두 작성해줘야 함. (`import styles from ./button.module.css` )
- 엘리먼트에 `className` 속성을 지정해 줄 때 어느 모듈 소속인지 명시해 줘야함. (`styles.button` )

```jsx
import React from 'react';
import styles from './button.module.css';

function Button() {
	return <Button className={styles.button}>버튼</Button>
}
```

## Styled-Components

css-in-js 를 지원하는 가장 대표적인 라이브러리로 가장 간편하고 인지도가 높은 편에 속한다.

styled-components를 사용하면 className 컴포넌트에 사용하지 않아도 되고, 컴포넌트에 각각 다른 스타일을 적용하여 재사용 할 수 있다는 장점이 있다.

✔️ 컴포넌트를 재사용해서 공통 코드를 줄일 수 있는 점이 내가 생각한 styled-component의 가장 큰 장점이다.

❗ 하지만 css-in-js 방식인 만큼 javascript 코드를 css로 변환하는 과정이 포함되기 때문에, css-in-css보다는 렌더링 성능이 현저하게 저하된다는 단점이 있다.

위의 장, 단점을 잘 비교하여 용도에 맞게 잘 사용해야겠다..!

```jsx
import styled from 'styled-components';

const StyleContainer = styled.div`
	margin: 10px;
	background-color: rgb(250, 250, 250);
`;

function App() {
	return (
		<>
			<StyledContainer/>
		</>
	)
}
```

### 전역 스타일링

styled-componenet로 전역 스타일(global style)을 정의하는 방법으로 `createGlobalStyle()`함수를 제공하고 있다.

예를 들어 스타일 컴포넌트로 antd를 사용하고 있는 경우 antd에서 정의한 여러가지 스타일이 있는데, 이것들을 변경하고 싶은 경우 혹은 `body, h1` 등 엘리먼트에 기본 스타일을 적용하고 싶은 경우 유용하게 사용할 수 있다.

아래는 내가 antd의 `Tabs` 의스타일을 변경하고 싶어 사용했던 방식이다. 아래와 같이 스타일을 적용한 컴포넌트를 잘 선언해주기만 하면 된다.

```jsx
import { createGlobalStyle } from 'styled-components';
import { Tabs } from 'antd';

const TabAlignCenter = createGlobalStyle`
  .ant-tabs-nav-wrap {
    margin-top: 10px;
  }
`;

function Container() {
	return (
		<>
			<TabAlignCenter>
				<Tabs defaultActiveKey='1' centered>
	          <Tabs.TabPane tab="첫번째" key="1" />
	          <Tabs.TabPane tab="첫번째" key="2" />
				</Tabs>
			</TabAlignCenter>
		</>
	)
}
```