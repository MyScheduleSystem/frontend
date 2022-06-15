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

    Sidebar menu중 Friends List에 friend name 클릭시 제대로 된 index가 가져오질 않음 (미해결) 

```

## 개발 회고록
### 2022-06-11
```
BackEnd를 Node express에서 firebase로 바꾸기로 결정했다.
    - MyScheduleSystem은 우리가 지속적으로 사용할 서비스이기 때문에 추후 유지보수적인 면에 있어 firebase가 좋다고 판단했다.

firebase 공식문서와 구글링을 통해 사용법을 익혀가고 있다.

firebase로 바꿈으로서 수정돼야 할 코드들이 많이 존재했다.

프로젝트가 완성되는 날까지 화이팅..!
```
### 2022-06-14
```

header에 menu 아이콘을 통해 sidebar를 열었을때 동작이 부드럽게 열리지 않았다.
    - Sidebar에 Drawer를 바꿔서 동작이 부드럽게 만들었다.

Drawer를 바꾸고 보니 아직 UI를 손봐야 할 부분이 많이 있었다.

이제 캘린더 부분의 완성이 눈앞에 보인다.
```