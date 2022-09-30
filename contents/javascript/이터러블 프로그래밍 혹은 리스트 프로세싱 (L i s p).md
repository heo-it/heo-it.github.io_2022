---
date: '2022년 9월 22일 오후 1:59'
title: '이터러블 프로그래밍 혹은 리스트 프로세싱 (L i s p)'
menu: 'javascript'
categories: ['JavaScript']
summary: '함수형 프로그래밍은 리습 프로그래밍, 이터러블 프로그래밍이라고도 불린다. 여기서는 FxJS를 import하여  `_, L, C` 등의 함수로 함수형 프로그래밍을 해본다. 예제를 통해 함수형으로 프로그래밍을 알아보자.'
thumbnail: './thumbnail/iterable-programming-or-lisp.png'
---
함수형 프로그래밍은 리습 프로그래밍, 이터러블 프로그래밍이라고도 불린다.

여기서는 [FxJS](https://github.com/marpple/FxJS) 를 import하여  `_, L, C` 등의 함수로 함수형 프로그래밍을 해본다.

예제를 통해 함수형으로 프로그래밍을 알아보자.

## 홀수 n개 더하기

- 홀수 n개의 제곱의 합을 구하는 함수를 구현해보자.

```jsx
function f1(limit, list) {
	let acc = 0;
	for (a of list) {
		if (a % 2) {
			const b = a * a;
			acc += b;
		}
		if (--limit == 0) break;
	}
}

f1(3, [1 ,2 ,3, 4, 5, 6, 7, 8, 9, 10]);
```

## if를 filter로

if문으로 순회하는 로직은 filter로 추상화 할 수 있다.

```jsx
function f1(limit, list) {
	let acc = 0;
	for (const a of L.filter(a => a % 2, list)) {
		const b = a * a;
		acc += b;
		if (--limit == 0) break;
	}
}

f1(3, [1 ,2 ,3, 4, 5, 6, 7, 8, 9, 10]);
```

- for문이 실행되는 횟수가 줄어들기 때문에 성능적인 이점도 가질 수 있다.

## 값 변화 후 변수 할당을 map으로

map을 활용하여 순회하는 배열의 값을 변경하고 a에 변수를 할당한다.

```jsx
function f1(limit, list) {
	let acc = 0;
	for (const a of L.map(a => a * a, L.filter(a => a % 2, list))) {
		// const b = a * a;
		acc += a;
		if (--limit == 0) break;
	}
}

f1(3, [1 ,2 ,3, 4, 5, 6, 7, 8, 9, 10]);
```

## break를 take로

take를 활용하여 break 대신 순회 횟수를 제한할 수 있다.

```jsx
function f1(limit, list) {
	let acc = 0;
	for (const a of L.take(limit, L.map(a => a * a, L.filter(a => a % 2, list)))) {
		acc += a;
		// if (--limit == 0) break;
	}
}

f1(3, [1 ,2 ,3, 4, 5, 6, 7, 8, 9, 10]);
```

‼️ 간단한 로직이었지만 이전에 구현해 놨던 L.map, L.filter, L.take 함수를 이용하여 모두 모듈화 가능했다. 명령형으로 작성된 코드를 함수형으로 구현할 수 있다.

## 축약 및 합산을 reduce로

- 주어진 배열에서 홀수 3개를 제곱한 총합을 반환는 예제이다.

```jsx
const add = (a, b) => a + b;

function f2(limit, list) {
	console.log(
		_.reduce(add,
			L.take(limit,
				L.map(a => a * a, 
					L.filter(a => a % 2, list)))));
}

f1(3, [1 ,2 ,3, 4, 5, 6, 7, 8, 9, 10]);
```

`go` 함수를 활용해서 조금 더 직관적으로 읽기 편하도록 구현할 수 있다.

```jsx
function f2(limit, list) {
	_.go(list,
		L.filter(a => a % 2),
		L.map(a => a * a),
		L.take(limit),
		_.reduce(add),
		console.log
	);
}
```

## while을 range로

어떤 구간을 얼만큼 반복하고 싶을 때 사용하는 while 이터러블 프로그래밍 관점에서는 range 함수라고 볼 수 있다.

```jsx
function f3(end) {
	let i = 1;
	while (i < end) {
		console.log(i);
		i += 2;
	}
}

f3(10);
```

range만큼 어떤 행위들을 할 것이다. 라고 명시한다고 생각하면됨.

```jsx
function f3(end) {
	_.each(console.log, L.range(1, end, 2));   // range(start, stop, step)
}
```

## 효과를 each로 구분

each라는 함수를 사용하면 함수 내부에는 반드시 부수적인 효과, 이펙트가 있다는 것을 표현한다.

each함수 호출 이후에도 리턴하는 배열이 동일하기 때문에 순회하면서 배열 요소를 변경해준다는 것을 의미.ㅎ

```jsx
function f4(end) {
	_.go(
		L.range(1, end, 2),
		_.each(console.log)
	)
}
```

## 예제 - 1

### 추억의 별 그리기

- 출력 결과

```bash
*
**
***
****
*****
```

- 먼저 range함수로 1 ~ 5 값을 가진 1차원 배열을 만든다.

```jsx
_.go(
	L.range(1, 6),
	console.log
);
```

- map을 순회하면서 range 길이만큼 배열로 리턴해준다.
- range는 인자의 길이만큼 숫자를 배열로 생성해서 리턴해주는 함수이다.

```jsx
_.go(
	L.range(1, 6),
	L.map(L.range),
	console.log
);
```

- 숫자로 구성된 요소들을 `*` 문자로 변경해준다.

```jsx
_.go(
	L.range(1, 6),
	L.map(L.range),
	L.map(L.map(_ => '*')),
	console.log
);
```

- 내부 배열들의 `*`  문자를 reduce를 이용해서 하나의 문자로 합쳐준다.

```jsx
_.go(
	L.range(1, 6),
	L.map(L.range),
	L.map(L.map(_ => '*')),
	L.map(_.reduce((a, b) => `${a}${b}`)),
	console.log
);
```

- 배열을 줄바꿈 문자(`\n`) 기준으로 reduce를 이용해 한번 더 합쳐준다.

```jsx
_.go(
	L.range(1, 6),
  L.map(L.range),
  L.map(L.map(_ => '*')),
  L.map(_.reduce((a, b) => `${a}${b}`)),
  _.reduce((a, b) => `${a}\n${b}`),
  console.log
);
```

- 코드를 더 읽기 쉽게 리팩토링 해보면 아래와 로직이 완성된다.

```jsx
const join = sep => _.reduce((a, b) => `${a}${sel}${b}`);

_.go(
	L.range(1, 6),
	L.map(L.range),
	L.map(L.map(_ => '*')),
	L.map(join(a, b)),
	L.map(join(a, b, '\n')),
	console.log
);
```

## 예제 - 2

### 추억의 구구단

- 출력 결과

```jsx
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18

3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
...
```

- 먼저 2 ~ 9 값을 가진 배열을 생성한다.

```jsx
_.go(
	L.range(2, 10),
	console.log
);
```

- map을 순회하면서 1 ~ 9 범위를 가진 내부 배열을 생성한다.

```jsx
_.go(
	L.range(2, 10),
	L.map(a => _.go(
		L.range(1, 10)
	)),
	console.log
);
```

- a와 i 값을 이용해 구구단 형식으로 출력해준다.

```jsx
_.go(
	L.range(2, 10),
	L.map(a => _.go(
		L.range(1, 10),
		L.map(i => `${a} x ${i} = ${a * i}`),
	)),
	console.log
);
```

- 내부 배열을 위에서 구현한 `join` 함수를 이용하여 `\n` 기준으로 합쳐준다.

```jsx
_.go(
	L.range(2, 10),
	L.map(a => _.go(
		L.range(1, 10),
		L.map(i => `${a} x ${i} = ${a * i}`),
		join('\n')
	)),
	console.log
);
```

- 전체 배열을 `\n\n` 기준으로 합쳐준다.

```jsx
_.go(
	L.range(2, 10),
  L.map(a => _.go(
	  L.range(1, 10),
	  L.map(i => `${a} x ${i} = ${a * i}`),
	  join('\n')
  )),
  join('\n\n'),
  console.log
);
```