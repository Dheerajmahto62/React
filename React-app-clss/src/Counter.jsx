import { useState } from "react";

function init(){
    console.log("init was executed");
    return Math.random();
}
export default function Counter() {
    // let [count , setCount] = useState(0); // we can use also useState within function
    let [count, setCount] = useState(init) // Intilization
    console.log("component was rended")

    let incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });
        // setCount((currCount) => {
        //     return currCount + 1;
        // });
        // setCount((currCount) => {
        //     return currCount + 1;
        // });

    }
    return (
        <div>
            <p>Count ={count}</p>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}