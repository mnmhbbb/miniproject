# 넥스트, 리덕스 사가를 사용한 미니프로젝트
- 기간: 21.04.04 ~ 21.04.06 (3일)
- 'React로 NodeBird SNS 만들기' 강의를 통해 `Next.js`, `Redux`, `Redux-Saga`를 배웠고, 복습을 위해 작은 프로젝트를 만들었다.
- 사용한 기술 및 도구:   
`Next.js`, `Redux`, `Redux-Saga`, `immer`, `Styled-components`, `shortid`, `faker`, `ESlint`, `Prettier` 등
## 주요 특징
### 1. 기본 구조
#### 1.1 크게 `/pages`와 `/components` 폴더로 나누어 관리
- 넥스트는 별도의 Route를 작성할 필요없이 `pages`폴더에 작성한 파일이 자동으로 라우팅된다.
- 
### 2. `shortid`, `faker` 라이브러리를 이용하여 더미데이터를 생성하였다.
게시글마다 고유의 id값을 가져야하기 때문에 `shortid`를 통해 id를 랜덤으로 생성하였고, 실제로 게시물을 작성한 것처럼 구현하기 위해 `faker`를 통해 이름과 게시물 내용을 불러왔다.
```javascript
const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      user: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),
    }));
```
### 3. `eslint`를 통해 코드의 문법적인 오류나 안티 패턴을 찾고, `prettier`를 통해 코드를 보기 좋게 포맷팅하였다.
- `npm i -D eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks babel-eslint eslint-plugin-jsx-a11y`
- eslint의 리액트 훅스, 접근성, import/export 구문 지원을 위해 라이브러리를 설치한다.
- 그런 다음 `.eslintrc` 파일을 생성하여 다음과 같이 설정하였다.
```javascript
{
  "parser": "babel-eslint",
  "parserOptions": {
    "ecnaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": ["plugin:react/recommended"],
  "plugins": ["import", "react-hooks", "jsx-a11y"],
  "rules": {
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-console": "off",
    "no-underscore-dangle": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "object-curly-newline": "off",
    "linebreak-style": "off"
  }
}
```
- `.prettierrc`를 다음과 같이 설정하였다.
```javascript
{
  "semi": true,
  "singleQuote": true,
  "endOfLine": "lf",
  "tabWidth": 2,
  "useTabs": false
}
```
#### 3.1 eslint와 prettier 충돌 문제
- eslint에는 포매팅 기능이 포함되어 있어서 eslint와 prettier를 같이 사용하는 경우 충돌이 난다고 한다.
- 따라서, `eslint-config-prettier`를 설치하여 eslint의 포매팅 기능을 종료시키고, `eslint-plugin-prettier`를 설치하여 prettier의 포매팅 기능을 사용할 수 있게 하였다.
- 도움을 받은 글: https://simsimjae.medium.com/prettier%EC%99%80-eslint%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%84%A4%EC%A0%95-110dc8ab94b6
#### 3.2 Warning: Prop `className` did not match.
- `styled-components`를 통해 스타일을 입히던 중에 오류가 발생했다.
- Next의 원리상 첫 페이지는 서버사이드렌더링(SSR)으로 렌더한 뒤, 클라이언트사이드렌더링(CSR)으로 화면을 렌더링하게 되는데, 이때 서버에서 받은 해시+클래스명과 이후 클라이언트에서 작동하는 해시+클래스 명이 달라지면서 스타일을 불러올 수 없는 문제가 발생한다.
- 따라서 `babel-plugin-styled-components`이라는 바벨 플러그인을 설치하고 `.babelrc` 파일을 다음과 같이 설정하여 해결할 수 있었다.
```javascript
{
  "presets": ["next/babel"],
  "plugins": ["babel-plugin-styled-components"]
}
```
- 도움을 받은 글: https://velog.io/@hwang-eunji/Styled-components-nextjs%EC%97%90%EC%84%9C-className-%EC%98%A4%EB%A5%98
### 4. 배포 모드 설정
그동안은 개발모드만 사용했는데, `next.config.js`에서 환경변수를 설정하여 배포모드에서는 코드가 노출되지 않게 하였다.
```javascript
module.exports = {
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production';
    const plugins = [...config.plugins];

    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins,
    };
  },
};
```
### 5. 최종적으로 `next export`를 하여 html파일을 생성하고 `netlify` 사이트에서 배포하였다.
