import {useState} from "react";

const Counter = () => {
    // Hook : react에서 상태관리를 위한 코드
    // useState 사용
    // const [변수명, 업데이트함수] = useState(초기값);
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onclick={()=>{setCount(count+1)}}>+</button>
            <button onclick={()=>{setCount(count-1)}}>-</button>
        </>
    )
}

export default Counter;