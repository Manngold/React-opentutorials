# React - Opentutorials

정보의 양이 급증하면서 프론트엔드 생태계에도 엄청난 정보의 양에 효율적인 대응을 하기 위해서 발전하기 시작한다

그렇게 페이스북에서 React라는 라이브러리를 발표하고 사람들은 React의 가독성, 코드 재사용성, 유지보수의 장점에 열광하게 된다

## 개발환경 구축

```
npx create-react-app my-app
cd my-app
```

## 배포

create-react-app이란 명령어를 사용하여 개발을 하면 개발자의 편의를 위해 여러 모듈이 설치되어있는 상태라 프로그램 자체가 많이 무겁다

따라서 `yarn build` 명령어를 수행하면 불필요한 정보를 정리하면서 배포를 위해 필요한 기능만을 남기고 정리를 한다 그리고 `build` 디렉토리에 배포를 위한 파일들이 생성된다

## Component 생성

컴포넌트는 기존 HTML5의 sementic tag처럼 개발자의 의도에 따라 코드를 분활하여 가독성, 재사용성, 유지보수 측면을 극대화 시키는 것이다

컴포넌트를 생성할 때 하나의 태그 안에 속해있어야 한다.

## props

이전에 컴포넌트를 생성하면서 우리는 효율적으로 코드를 작성할 수 있지만 같은 컴포넌트에 다른 정보가 담긴다면 매번 구조는 같지만 내용이 다른 컴포넌트를 생성해야 한다.

따라서 이런 비효율성을 해결하고자 props의 개념이 들어간다

기존 HTML의 attribute처럼 key에 대한 value를 지정하고 그 key와 value는 해당 컴포넌트의 props에 저장이 된다

따라서 `<App name="manngold">`로 props를 넘겨주면 App 컴포넌트 내에서 `{this.props.name}`으로 해당 props를 사용할 수 있다 따라서 이런 기능을 활용하면 코드의 재사용성이 대폭 증가한다

## Component 분리

컴포넌트가 몇 개 사용 안되는 소규모 프로젝트를 진행할 때에는 메인 컴포넌트에 해도 상관은 없겠지만 규모가 커질수록 컴포넌트의 양은 방대해질 것이다.

따라서 서브 컴포넌트를 모아두는 파일을 생성해서 모아두고 import를 통해서 가져오면 관리가 수월해진다

## state

state는 props와 함께 비교하면서 알아보자

props는 컴포넌트의 기본 동작을 조작하는 도구이다 사용자와 개발자에게 중요한 정보

state는 사용자가 알지 못하게 컴포넌트 내부적으로 사용되는 것이고 복합적이며 다양한 것을 제작을 할 수 있다

컴포넌트가 실행되고 render함수가 실행되기 전에 constructor를 통해서 컴포넌트를 초기화한다

초기화가 끝나면 `this.state`가 초기화가 된다. 그리고 state의 정보를 활용하여 렌더 함수가 실행된다

그리고 컴포넌트에게 속성을 전달할 때, `{}` 로 묶어서 보내줘야 JS 코드를 인식할 수 있다

정리 - state는 사용자들에게 정보가 노출되지 않고 내부에서 조작을 하면서 상위 컴포넌트에서 하위 컴포넌트를 조작하고 싶을 때, 효율적으로 사용이 가능하다

## key

list를 활용하여 여러 태그를 생성할 때, `Warning: Each child in a list should have a unique "key" prop` 라고 경고 메세지가 뜨는 것을 확인할 수 있다.

자식 요소들이 식별자를 갖고 있어야 한다는 뜻인데 이때 자식요소의 속성으로 `key`라는 속성과 unique value를 넣어주면 된다

## Event

React는 state를 갖고있고 우리는 그걸 필요에 따라서 동적으로 설정을 할 수 있다 그런데 React는 state가 변경되는 상황이 발생할 때마다, state를 갖고 있는 render 함수가 다시 실행이 되고

물로 그 안에 속해있는 다른 하위 컴포넌트들의 render함수도 다시 실행된다
