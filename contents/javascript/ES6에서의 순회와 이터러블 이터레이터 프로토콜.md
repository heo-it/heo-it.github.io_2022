---
date: '2022년 9월 18일 오후 2:34'
title: 'ES6에서의 순회와 이터러블:이터레이터 프로토콜'
menu: 'javascript'
categories: ['JavaScript']
summary: 'ES6에서 리스트 순회를 Array, Set, Map을 통해 알아보고, 이터레이터 프로토콜과 이터러블을 이해한다.'
thumbnail: './thumbnail/es6 iterator protocol.png'
---
## 기존과 달라진 ES6에서의 리스트 순회
: for i++ 의 index 방식에서 for…of 의 iterator방식으로 변경되었다.

- 기존 리스트 순회

```jsx
const list = [1, 2, 3];
for( var i = 0; i< list.length; i++){
	log(list[i]);
}

// 유사 배열 순회
const str = 'abc';
for( var i = 0; i< str.length; i++){
	log(str[i]);
}
```

- 변경된 리스트 순회

```jsx
for (const a of list) {
	log(a);
}

for (const a of str) {
	log(a);
}
```

## Array, Set, Map를 통해 알아보기

- Array를 통해 알아보기

```jsx
const arr = [1, 2, 3];
for (const a of arr) log(a);   // 1, 2, 3

```

- Set을 통해 알아보기

```jsx
const set = new Set([1, 2, 3]);
for (const a of set) log(a);   // 1, 2, 3
```

- Map을 통해 알아보기

```jsx
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const a of map) log(a);   // 1, 2, 3
```

: 해당 함수를 통해 반환되는 값들도 Iterator형태이기 때문에 `map.values(), map.keys(), map.entries()`도 정상동작한다.

```jsx
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const a of map.keys()) log(a);
for (const a of map.values()) log(a);
for (const a of map.entries()) log(a);
```

## 이터러블/이터레이터 프로토콜

- 이터러블: 이터레이터를 리턴하는 `[Symbol.iterator]()` 를 가진 값.
- 이터레이터: `{ value, done }` 객체를 리턴하는 `next()` 를 가진 값.
- 이터러블/이터레이터 프로토콜: 이터러블을 `for…of`, 전개 연산자 등과 함께 동작 하도록 한 규약.

### 사용자 정의 이터러블

```jsx
const iterable = {
	[Symbol.iterator]() {
		let i = 3;
		return {
			next() {
				return i === 0 ? { done: true } : { value: i--, done: false };
			},
			[Symbol.iterator]() { return this; }  // 자기 자신을 반환하는 로직
		}
	}
};

let iterator = iterable[Symbol.iterator]();
for (const a of iterable) log(a);
for (const a of iterator) log(a);   // 위의 로직을 추가해주어야 오류 없이 동작한다.

const arr = [1, 2, 3];
let iter2 = arr[Symbol.iterator]();
log(iter2[Symbol.iterator]() == iter2);
```

📌  **잘 만든 이터러블이란 ?!**

- 이터러블을 만들어서 순회할 때 잘 동작한다.
- 일부 진행한 이후에는 진행된 결과 이후의 값들로 진행이 된다.
- 자기 자신을 반환하는 `Symbol.iterator`를 가지고 있어야 한다.

DOM도 Iterator를 통해 순회가 가능하다.

```jsx
for (const a of document.querySelectAll('*')) log(a);
```

## 전개 연산자 (=나머지 연산자)

- 전개 연산자도 이터러블/이터레이터 프로토콜을 따른다.
- iterator를 null로 변경하면 에러가 발생한다.

```jsx
const a = [1, 2];
a[Symbol.iterator] = null; 
log([...a, ...[3,4]);   // Uncaught TypeError: a is not iterable

console.log([...a, ...[3, 4]]);   // [1, 2, 3, 4]
```