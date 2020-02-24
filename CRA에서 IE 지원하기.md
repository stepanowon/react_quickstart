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



