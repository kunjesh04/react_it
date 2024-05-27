import React, { useEffect, useRef, useState } from 'react'

export default function FuncTimer() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer((prevTime) => prevTime + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    const handleStopTimer = () => {
        clearInterval(intervalRef.current)
        h1Ref.current.style.visibility = 'hidden'
    }

    return (
        <div>
            <h1 ref={h1Ref}>Try Removing Me!</h1>
            <h3>FuncTimer</h3>
            <h4>Timer: {timer}</h4>
            <button onClick={handleStopTimer}>Stop Timer</button>
        </div>
    )
}
