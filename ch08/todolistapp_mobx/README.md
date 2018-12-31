# Mobx Sample Code
## React에서 Mobx를 decorator와 함께 사용하려면?
* create-react-app 으로 작성한 코드를 yarn eject 로 분해한 후
* yarn add mobx mobx-react
* yarn add -D @babel/plugin-transform-react-jsx @babel/plugin-transform-react-jsx-source @babel/plugin-proposal-decorators @babel/plugin-transform-react-jsx-self
* 그리고 package.json에 다음의 설정을 추가한다.
~~~
  "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [ "@babel/plugin-proposal-decorators", { "legacy": true } ],
      [ "@babel/plugin-proposal-class-properties", { "loose": true } ]
    ]
  }
~~~

## CRA에서 decorator 문법 warning 제거하기

![warning about decorator syntax](https://github.com/stepanowon/react_quickstart/blob/master/ch08/warning_decorator_syntax.png)
