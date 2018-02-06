## yarn VS npm 비교

npm | yarn| 설명 
--- | --- | --- 
npm init | yarn init| 프로젝트 초기화(package.json 생성)
npm install | yarn | 현재 디렉토리의 package.json을 이용해 의존성 패키지들을 다운로드함.
npm install --save react | yarn add react | 의존성 패키지들을 다운로드하고 package.json에 depencies에 추가함.
npm install --save-dev  cross-env | yarn add --dev cross-env | 의존성 패키지들을 다운로드하고 package.json에 devDepencies에 추가함.(개발의존성)
npm update --save | yarn upgrade | 설치한 패키지를 업데이트함.
npm install --global babel-cli | yarn global add babel-cli | 패키지를 전역에 다운로드하고 설치함.
npm run build | yarn build | package.json에서 build라는 이름의 scripts 태스크러너를 실행함.
npm cache clean | yarn cache clean | 캐시를 삭제함
npm publish | yarn publish | 현재 패키지를 npm registry에 배포함
npm login | yarn login | 패키지를 npm registry에 배포하거나 관리하려면 로그인해야 함.


> 더 자세한 내용은 https://infinite.red/files/yarn.pdf 참조
