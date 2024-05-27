import React, { useState, useEffect } from 'react'

export default function FindCursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        console.log('useEffect');
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            // console.log('Removed');
        }
    }, [])

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY })
        document.title = `X:${e.clientX}, Y:${e.clientY}`
        console.log('Title Updated');
    }

    return (
        <div>
            Tracking Mouse Co-ordinates: {cursorPosition.x}, {cursorPosition.y}
        </div>
    )
}
