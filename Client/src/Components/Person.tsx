import React, { useState, FC } from 'react'
interface IPersonProps
{
    name: string
}
export const Person:FC<IPersonProps> = (props:IPersonProps) => {
    const { name } = props
    const [count, setCount] = useState(0)
    return <h1 className="red noselect" onClick={() => setCount(count+1)}>{count}.) {name}</h1>
}