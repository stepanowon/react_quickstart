# CRA에서 IE 지원하기

### react-app-polyfill 내려받기
yarn add react-app-polyfill

### 지원 기능

* Promise (for async / await support)
* window.fetch (a Promise-based way to make web requests in the browser)
* Object.assign (a helper required for Object Spread, i.e. { ...a, ...b })
* Symbol (a built-in object used by for...of syntax and friends)
* Array.from (a built-in static method used by array spread, i.e. [...arr])

#### IE 9 지원
~~~
// src/index.js의 가장 앞부분에 작성할 것
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// ...
~~~


#### IE 11 지원
~~~
// src/index.js의 가장 앞부분에 작성할 것
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// ...
~~~


## 주의사항 
* CRA 3.x 버전에서는 개발서버일 때는 작동하지 않음. Production 모드로 빌드했을 때 정상적으로 작동함.
* 만일개발서버상에서 작동되기를 원한다면 다음의 두가지 중 한가지 방법을 사용할 것
  - CRA 2.x로 다운그레이드 설치하여 프로젝트 코드 생성
  - package.json의 기존의 react-scripts를 삭제하고 2.x.x 로 재설치할 것
