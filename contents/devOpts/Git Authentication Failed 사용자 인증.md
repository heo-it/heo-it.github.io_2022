---
date: '2022년 8월 30일 오전 12:22'
title: 'Git Authentication Failed 사용자 인증'
menu: 'devOpts'
categories: ['devOpts']
summary: 'Git Authentication Failed 사용자 인증 해결법에 대해 정리'
thumbnail: './thumbnail/GitAuthenticationFaild.png'
---
github 인증 방법이 2021년부로 token 방식으로 바뀐 뒤로 종종 아래와 같은 인증 오류가 발생하였다.<br/><br/>

*remote: Invaild username or password.*
*fatal: Authentication faild for ~*
<br/>

구글에 여러가지 해결 방법이 있었으나 fork를 사용하는 나에게 가장 직관적이고 간편했던 방법을 기록해 놓으려고 한다 🙂

### 1. 명령어

```bash
> git remote remove origin
> git remote add origin https://유저네임:비밀번호@github.com/저장소이름 
```

### 2. fork

![GitAuthenticationFaild](./image/GitAuthenticationFailed.png)

그냥 지워 버리기 🙃

이후 Add New Remote를 이용해서 재 인증 하는 방법을 추천한다.