# generator 문법
ES6에서 도입된 제너레이터(Generator) 함수는 이터러블을 생성하는 함수이다. 제너레이터 함수를 사용하면 이터레이터 프로토콜을 준수해 이터러블을 생성하는 방식보다 간편하게 이터러블을 구현할 수 있다. 또한 제너레이터 함수는 비동기 처리에 유용하게 사용된다.

Generator는 빠져나갔다가 나중에 돌아올 수 있는 함수입니다. 이때 변수 값은 출입 과정에서 저장된 상태로 남아 있습니다.

```jsx
function* generator(i) {
	yield i;
	yield i + 10;
}
```

### 참고

- MDN Generator

[Generator - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator)