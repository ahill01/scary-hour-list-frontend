import React, {useState, useRef} from "react"

function Timer({timer, setTimer}){
    const [isActive, setIsActive] = useState(false)
    const [bttnClass, setBttnClass]=useState("timerPause")
    const countRef = useRef(null)
  
    function handleStart(){
      // start button logic here
      setIsActive(true)
      countRef.current = setInterval(() => {
          setTimer((timer) => timer+1)
      },1000)
      setBttnClass("timerRunning")
    }
  
    function handlePause(){
      // Pause button logic here
      clearInterval(countRef.current)
      setIsActive(false)
      setBttnClass("timerPause")
    }

    function handleClick(){
        if(isActive){
            handlePause()
        } else {
            handleStart()
        }
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }

    return(
        <div className="counter">
           <button onClick={handleClick} className={bttnClass}>{formatTime(timer)}</button>     
        </div>
    )
}

export default Timer