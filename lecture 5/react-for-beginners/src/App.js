// import Button from "./Button";
// import styles from "./App.module.css"
import {useState, onClick, useEffect} from "react";


///////////////////////////////////////////// Lecture 6-4 /////////////////////////////////////////////
// Cleanup ; 잘 사용하지는 않음
// react.js : component가 destroy 될 때도 코드 실행할 수 있음

function Hello() {
    // function byFn() {
    //     console.log("bye :(")
    // }
    // function hiFn() {
    //     console.log("created! :)")
    //     // component가 언제 파괴될지 알고 싶다면 hiFn이 byFn을 return
    //     return byFn;
    // }
    // useEffect(hiFn, []);

    // other sol1
    useEffect(() => {
        console.log("hi :)");
        return () => console.log("bye :(")
    }, []);

    // other sol2 ; 길어서 잘 안 씀 
    // useEffect(function() {
    //     console.log("hi :)");
    //     return function(){
    //         console.log("bye :(");
    //     }
    // }, []);

    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);

    return (
        <div> 
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}



///////////////////////////////////////////// Lecture 5,6 /////////////////////////////////////////////

// className의 이름이 랜덤으로 생성됨!

// lecture6 : 첫번째로 render할 때만 코드를 실행하고 싶을 수 있음
// API를 통해 데이터를 가져올 때 처음 render일어나고 이후는 원하지 않음

// State가 변화할 때, 모든 component등을 포함한 code들이 다시 실행됨.
// But 하나는 처음만 실행되길 원할 수도 있음

// lecture 6-3 : 내 코드의 특정 부분만이 변화했을 때, 원하는 코드들을 실행할 수 있는 방법
// function App() {
//     const [counter, setValue] = useState(0);
//     const [keyword, setKeyword] = useState("");
//     const onClick = () => setValue((prev) => prev+1);
//     const onChange = (event) => setKeyword(event.target.value);

//     // console.log("I run all the time");

//     // 딱 한 번만 호출하는 방법
//     // const iRunOnlyOnce = () => {
//     //     console.log("I run only once.");
//     // } 
//     // useEffect(iRunOnlyOnce, []);
//     useEffect(() => {
//         console.log("I run only once.")
//     }, []); // 리액트가 지켜볼 게 없기 때문에,  []이기 때문에 처음 한 번만 실행

//     useEffect(() => {
//         if(keyword !=="" && keyword.length > 5){
//             console.log("I run when 'keyword' changes.");
//         }
//     }, [keyword]); // keyword가 변할 때 이 코드를 사용하고 싶다면 []에 keyword를 써줌

//     useEffect(() => {
//         console.log("I run when 'counter' changes.");
//     }, [counter]); // counter가 변할 때 이 코드를 사용하고 싶다면 []에 keyword를 써줌

//     useEffect(() => {
//         console.log("I run when keyword&counter changes.");
//     }, [keyword, counter]);

//     return (
//         <div> 
//             {/* lecture 5 
//             <h1 className={styles.title}>Welcome back!!!!</h1>
//             <Button text={"Continue"} /> */}

//             <input 
//                 value={keyword}
//                 onChange={onChange}
//                 type="text" 
//                 placeholder="Search here..."
//             />
//             <h1>{counter}</h1>
//             <button onClick={onClick}>Click me</button>
//         </div>
//     );
// }


// 정리
// • 리액트를 사용하는 이유: 최소 단위의 렌더링을 위해
// • useState(): 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
// • props: 태그의 속성 값을 함수의 아규먼트 처럼 컴포넌트에 값을 전달해준다.
// • useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재, 디펜던시가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다. 이 때 디펜던시는 여러개 입력이 가능하다.

// 🏴 부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링이 된다.(wa can use memo)
// 🏴 propType을 설치하고 props의 타입을 지정해 줄 수 있다. 이 때 isRequired로 필수값을 지정 가능

// useEffect()란?
// useEffect는 state의 상태를 감지 변경이 있을 때란 해당 컴포넌트를 랜더링한다.
// useState(function(), []) [] 로 3가지 경우의 수 존재 ex) a, b 스테이트
// 1. 빈 배열을 넣는 경우, 최초 1회 랜더링 될 때만 실행한다.
// 2. [a] 하나의 state만 넣는 경우 a가 변경될 경우만 랜더링한다.
// 3. [a, b] a나 b중 하나가 값이 변경 될 때 랜더링한다.

// useEffect 왜 써?
// 렌더링이 계속 된다면, 특히 특정 api를 불러오게 되는 경우 계속해서 불러오는 문제가 생길 수 있다.
// state를 변경할 때, 계속해서 렌더링 되는 문제점이 존재한다. 많은 state가 존재한다면 성능 저하 문제가 발생할 수 있다. 이런 문제를 해결하기 위해 사용한다.


export default App;

