---
date: '26 Jan, 2022'
title: 'ES6 구조분해할당'
menu: 'javascript'
categories: ['JavaScript']
summary: 'ES6의 구조 분해 할당 문법에 대해 정리'
thumbnail: './image/es6.png'
---
# ES6 - 구조 분해 할당
> Javascript에서 자주 사용하는 배열이나 객체를 변수로 **분해**할 수 있게 해주는 문법에 대해서 정리하였다.

## 1. 배열 분해하기

```jsx
let arr = ["apple", "banana"];

let [first, second] = arr;

console.log(first);   // apple
console.log(banana);   // banana
```

### 쉼표를 사용하여 요소 무시하기

```jsx
let [first, , thired] = ["apple", "banana", "watermelon"];

console.log(first);  // apple
console.log(thired); // watermelon
```

### 변수 교환 트릭

```jsx
let first = "apple";
let second = "banana";

[first, second] = [second, first];

console.log(first, second);  // banana, apple
```

### ‘...’로 나머지 요소 가져오기

```jsx
let [first, second, ...rest] = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(first);  // 'a'
console.log(second); // 'b'
console.log(rest);  // ['c', 'd', 'e', 'f']..
```

### 기본값

```jsx
let [fisrt = "apple", second = "banana"] = ["watermelon"];

console.log(first);  // watermelon
console.log(second); // banana
```

## 2. 객체 분해하기

객체 분해의 가장 큰 장점은 객체 순서와 상관없이 저장된 값과 상응하는 변수에 할당 된다는 것이다.

```jsx
let { first, second } = { second: "banana", first: "apple" };

console.log(first, second);  // apple, banana
```

### 기본값

배열과 마찬가지로 선언 시 기본값을 설정할 수 있으며, 표현식 뿐만 아니라 함수 호출을 기본값으로 할당할 수 있다.

```jsx
let fruits= {
	first: "apple"
};

let { first = prompt('apple'), second = prompt('banana') } = fruits;

console.log(first);  // apple
console.log(second)  // prompt창에 입력된 값
```

### ‘...’로 나머지 요소 가져오기

```jsx
let fruits = {
	first: "apple",
  second: "banana",
	thired: "watermelon",
};

let {first, ...rest} = fruits;

console.log(first);        // apple
console.log(rest.second);  // banana
console.log(rest.thired);  // watermelon
```

## 3. 함수 매개변수

함수의 매개변수를 구조 분해하여 받을 수 있다.

```jsx
let fruits = {
	first: "apple",
  second: "banana",
	thired: "watermelon",
};

showFruits ({ first, second, thired}) => {
	alret(first);
	alret(second);
	alret(thired);
}

showFruits(fruits);
```