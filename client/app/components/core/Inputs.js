import React from 'react'
import { Label, Input } from 'reactstrap'

export const PollLabel = ({ text }) => 
<Label style={{ textAlign: 'center', width: '100%' }}>{text}</Label>

export const PollInput = ({ value, onChange, onRemove }) => 
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
    {onRemove && <span style={{ flex: 1 }}></span>}
    <Input value={value} onChange={onChange} type="text" style={{ maxWidth: '500px', margin: '10px' }} />
    {onRemove && <span onClick={onRemove} style={{ cursor: 'pointer', flex: 1 }}>
        <i className="fas fa-minus"></i>
    </span>}
</div>

export const PlusInput = ({ onClick }) => 
<div style={{ display : 'flex', justifyContent: 'center' }}>
    <span onClick={onClick} style={{ cursor: 'pointer' }}>
        <i className="fas fa-plus"></i>
    </span>
</div>
