import React from 'react'

const containerStyle = {
  backgroundColor: 'indianred', 
  padding: '10px 25px', 
  margin: '15px', 
  border: '2px solid darkred', 
  borderRadius: '10px',
  fontWeight: 'lighter',
  color: 'white'
}

const Err = ({ text }) => (
  <div className="flex justify-center" style={containerStyle}>
    <span>{text}</span>
  </div>
)

export default Err