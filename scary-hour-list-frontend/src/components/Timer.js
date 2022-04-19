import React, {useState} from "react"

function Timer(){
const[paused, setPaused]=useState(false) 
let num = 0;

//counter
// function count(){
//     if(!paused){
//     num++;
//     console.log(num)
//     return num;
// };
// }
useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
});

// setInterval(count,1000);

    return(
        <div className="counter">
           <button onCLick={setPaused(paused => !paused)}>{paused ? "paused" : `${num}`}</button>
        </div>
    )
}

export default Timer