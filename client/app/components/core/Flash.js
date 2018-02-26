import React, { Component } from 'react'

const typeToColor = {
  "success": "green",
  "error": "red",
  "info": "lightblue"
}

const Flash = ({ flash }) => 
<div style={{ width: '100%', backgroundColor: typeToColor[flash.type], height: '100px' }}>
  <p>{flash.message}</p>
</div>

export default Flash