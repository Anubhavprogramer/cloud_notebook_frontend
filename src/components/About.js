import React from 'react'

export const About = (props) => {
  return (
    <div>
      <h1 className={`text-${props.mode === "dark" ? "light" : "secondary"}`}>Ab apne bare me kya hi batau mai hu hi itna khas😁😁</h1>
    </div>
  )
}
