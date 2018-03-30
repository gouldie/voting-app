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
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={containerStyle}>
      <span>{text}</span>
    </div>
  </div>
)

export default Err