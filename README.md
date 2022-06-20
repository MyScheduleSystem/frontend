# FrontEnd

## MyScheduleSystem Project

`
    Release:

    BackEnd: firebase
`

`
    Project start: npm start
`

`
    Contributors: FoxMon, Leo, Velo248
`

`
    FrontEnd: FoxMon, Leo, Velo248
`

## Setting

    setup > SETUP.md 확인

## Language

    JavaScript(ES6)

## OpenSource

    fortawesome

    Lodash

    PostCss

    firebase

    StyledComponent

    MaterialUi(MUI)

    OpenWeather API(https://openweathermap.org/)

    Google Charts API(https://developers.google.com/chart)

## CheckList
```
불변성 유지

불필요한 렌더링 자제

일관성 유지

로직이 반복되지는 않는가?

forEach, map, filter, every 등 이러한 함수들이 적절하게 사용되고 있는가?

useState(setState의) 동작 이해
```

## JSON Spec

`
    TODO: ADD
`

## Function

    MyCalendar
        Date Picker
        Completed todo list or not

    MyModal
        Create My Schedule
        Read My Schedule or Friend Schedule
        Update My Schedule
        Delete My Schedule
        Share My Schedule
        Show Todo card popup

    Card
        Show My Daily Schedule
        Update My Daily Schedule
        Delete My Daily Schedule
        Create My Daily Schedule

    Sns
        Sns Read
        Sns Post
        Sns Update
        Sns Delete

    Friend
        Add Friend
        Delete Friend

    User
        Create User
        Read User Info
        Update User
        Delete User Info
        Show User popup

    Chatroom
        Create chatroom
        Show charoom list
        React charoom's user list
        Delete chatroom

    Validation
        User validation
        Card validation

    Sidebar
        View friends profile
        Logout my acount

    UserContextProvider
        userReducer
        UserContext


## Issue

```
    setState의 비동기에 대한 이해 (해결)
        - useState를 사용할 경우 값이 계산되어 변경될 때 React는 하나의 컴포넌트 내에서 수많은 state가 존재하기 때문에
            state들의 값이 바뀔 때마다 re-rendering을 하는 것은 비효율적. 따라서 한꺼번에 모아서 rendering을 한다.
            React는 이러한 이유로 성능 향상을 위해 setState를 연속 호출하면 Batch 처리하여 한 번에 rendering 한다.

        - useState는 비동기로 동작하는 hook이다. 동기적으로 처리하고 싶다면 useState 안에 callback 함수를 이용하자.

        - What is Batch?
            React가 더 효율적인 성능을 위해 여러 개의 state의 update를 re-rendering으로 묶는 것. React는 16ms 동안 변경된 상태 값들을
            하나로 묶는다.

    CardItem이 여러 개 있을 경우, 2개 이상의 CardItem을 클릭 시 내용이 겹치는 오류 발생 (해결)
        - ex) Item A, Item B 이렇게 2개의 card가 존재할 때, B를 클릭 후, A 카드를 선택하면 A의 카드 내용과 B의 카드 내용이 겹쳐지는 오류 발생

        - 해결: setEditTodoItem(() => Object.assign(editTodoItem, obj)) 이 부분을 setEditTodoItem(() => Lodash.cloneDeep(obj)) 이렇게 수정했다.
            Object.assign의 Shallow copy가 이루어 지기 때문에 서로 다른 두 카드를 선택할 경우 같은 Memory를 참조하게 된다. 따라서 Lodash.cloneDeep 혹은
            순환하면서 깊은 복사를 진행한다면 오류를 해결할 수 있다.

    Input 태그의 onChange 이벤트 함수 전달 시 React가 버벅거리는 문제 (해결)
        - React는 state가 변경될 때마다 새로 renderin 된다. 즉 onChange 이벤트를 핸들링할 때 rendering이 여러번 이루어질 가능성이 매우 높다.
            ex) input: FoxMon => F o x M o n 총 6번 rendering 발생. (Bad)

        - 따라서 재사용 가능한 함수는 useCallback을 통해 다시 만들지 않고 재사용 가능하도록 다뤄보자.
            ex) onTitleChangeHandler = (e) => {} 이 부분을 onTitleChangeHandler = useCallback((e) => {}, []) 이렇게 변경했다. => 메모이제이션된 콜백을 반환한다.

        - 두 번째 전달되는 parameter는 의존성 값을 전달한다. 즉 이 부분이 변경된다면 callback의 의존성이 변경된다는 의미이다.

    Sidebar menu중 Friends List에 friend name 클릭시 제대로 된 index가 가져오질 않음 (해결)
        - index를 가지고 있는 state를 추가하여 클릭 시 해당 인덱스를 state에 저장하는 방식으로 해결했다.

    Logout 실행 후 새로고침 하면 signinForm이 나오지 않고 calendar가 나오는 오류 발생 (해결)
        - Token의 유효성 검사가 제대로 이루어지지 않았기 때문에 에러가 발생했다.
            이러한 오류를 해결하기 위해 userContextProvider 컴포넌트에서 useEffect를 활용하여 localStorage에 있는 object를 JSON으로 parse하여 state에 재할당 해주는 등
            여러가지 시도를 해봤다. 하지만 동작이 되더라도 새로고침을 하는 순간 내가 원하는 페이지가 제대로 보이지 않는 등 여러가지 에러가 존재했다.
            또한 토큰을 localStorage에 저장함으로서 발생하는 여러 보안 취약점이 존재하기 때문에 다시 작성할 필요가 있었다.

        - localStorage를 활용하여 Token을 관리하는 것에 대한 단점. 그리고 이를 해결하기 위한 In memory(Reducer의 활용).
            XSS, CSRF 보안 취약점으로 인해 localStorage에 있는 Token을 사용하거나 도용당할 위험성이 있다.
            따라서 우리의 project에서는 React의 In memory에 저장하도록 수정했다. 물론 In memory에 저장할 경우 새로운 탭을 열 경우 다시 로그인을 해야할 수도 있지만
            이러한 점들을 보완하며 새롭게 완성시켜 보기로 했다. 이러한 기능을 완성하기 위해 나는 Reducer를 사용하기로 했다.
                * In memory로 구현하는 경우, 외부 공격으로부터 안전하다.
            이러한 Reducer의 도입으로 Context의 object를 In memory를 활용해 쉽게 관리할 수 있었으며 refreshToken을 Cookie에 저장함으로서 Token관리가 더욱 용이해졌다.
            전 보다 훨씬 더 부드럽고 정확한 동작을 하도록 작성할 수 있었다.

        - Cookie에 저장하는 방식
            Cookie는 CSRF 공격에 취약하지만 SameSite Cookie는 Cookie기반 접근 방식을 CSRF 공격으로부터 방지할 수 있다.
            인증 및 API server가 다른 domain에서 hosting되는 경우 solution이 아닐 수 있지만 그렇지 않은 경우 이러한 단점을 보완할 수 있다.
                * 우리의 프로젝트에서는 refreshToken의 경우 cookie에 저장하고, accessToken의 경우 In memory에 저장한다.
                * sameSite option은 'strict' => 같은 domain에서 해당 cookie에 접근이 가능하다.

        - What is Reducer?
            React에서는 상태를 관리하는데 있어 state뿐만 아니라 useReducer를 활용하는 방식이 있다.
            이러한 Hook 함수는 Component의 state update logic을 Component에서 분리할 수 있다. 이러한 state update logic은
            Component 바깥에 작성할 수도 있고 다른 file에서도 불러와 사용할 수 있다.
                * 즉 useState의 대체 함수라고도 볼 수 있다.
                * 이러한 상태변화 로직을 사용하기 위해선 dispatch를 사용해야함.
```

## 개발 회고록
### 2022-06-11 (FoxMon)
```
BackEnd를 Node express에서 firebase로 바꾸기로 결정했다.
    - MyScheduleSystem은 우리가 지속적으로 사용할 서비스이기 때문에 추후 유지보수적인 면에 있어 firebase가 좋다고 판단했다.

firebase 공식문서와 구글링을 통해 사용법을 익혀가고 있다.

firebase로 바꿈으로서 수정돼야 할 코드들이 많이 존재했다.

프로젝트가 완성되는 날까지 화이팅..!
```

### 2022-06-14 (Leo)
```
header에 menu 아이콘을 통해 sidebar를 열었을때 동작이 부드럽게 열리지 않았다.
    - Sidebar에 Drawer를 바꿔서 동작이 부드럽게 만들었다.

Drawer를 바꾸고 보니 아직 UI를 손봐야 할 부분이 많이 있었다.

이제 캘린더 부분의 완성이 눈앞에 보인다.
```

### 2022-06-20 (FoxMon)
```
reduer를 도입했다. 처음 사용해보는 reducer였기 때문에 공부하고 적용시키기 까지 꽤 오랜 시간이 걸렸다.

action과 type이 뭔가 Redux와 비슷한 느낌..?

열심히 다듬어서 꼭 우리가 사용하는 날이 도래했으면 좋겠다!
```