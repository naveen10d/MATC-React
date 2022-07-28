import React from 'react'

export default function Login() {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('')
  return (
    <div>
      <input
        type='text'
        onChange={(e)=>setName(e.target.value)}/>
      <input
        type='text'
        onChange={(e) => setPassword(e.target.value)} />
      <button disabled = {(name&&password)?false:true}>click</button>
    </div>
  )
}
