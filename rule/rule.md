# Programming Rule

1. 변수
    - 이름
        * camelCase를 활용하도록 한다.
        * boolean의 경우: isOpen과 같이 사용하도록 한다.
        * 변수의 이름으로 해당 변수가 어떠한 역할을 하는지 파악할 수 있도록 명명한다.

    - var 사용 금지
        * var의 scope가 불안정 하므로 최대한 let과 const를 사용하도록 한다.

    - 최대한 let의 사용을 자제하도록 한다.
        * 불변성 유지를 위해 let의 사용을 최소화 하고 최대한 const를 쓰도록 한다.
        ```
        ex) 1 ~ 10 까지의 값을 구해야 하는 경우.
            즉시실행함수(IIFE)를 활용하여 해결하도록 한다.
                const sum = (() => {
                    let sum = 0
                    for(let i = 1; i <= 10; i++) {
                        sum += i
                    }
                    return sum
            })()
        ```
2. 함수
    - 이름
        * React 내에서 관리하는 event 함수의 경우 onClickEventHandler와 같이 명명한다. (onNameEventHandler => on ~~~ EventHandler 와 같이 명명함.)
        * 해당 함수의 이름을 보고 동작을 파악할 수 있도록 작성한다.
        * 하위 컴포넌트에서 상위 컴포넌트로 값을 넘겨줄 때 사용하는 함수의 경우 Handler를 제외한다.
        ```
        ex) onClickEvent()
        ```
    - 컴포넌트 밖에서 관리되는 함수의 경우 call, bind를 활용하도록 한다.
3. state, props
    - 상위 컴포넌트에서 하위 컴포넌트로는 props로 전달한다.
    - 히위 컴포넌트에서 상위 컴포넌트로는 전달 받은 함수의 파라미터로 값을 전달한다.
    - 하위 컴포넌트에서 상위 컴포넌트의 state를 변경하지 않는다.
        * 즉 하위 컴포넌트에서 상위 컴포넌트로부터 전달받은 props를 변경하지 않는다.
    - state를 남용하지 않도록 한다.
        * 꼭 state로 사용해야 하는가? 다시 한 번 더 생각해 보도록 한다.