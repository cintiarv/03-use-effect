import React, { useEffect, useState } from 'react'
import { AlerComponent } from './AlerComponent'

export const TestComponent = () => {
  const [user, setUser] = useState('cin')
  const [date, setDate] = useState('01-01-1996')
  const [counter, setCounter] = useState(0)

  const modUser = (e) => {
    setUser(e.target.value)
  }
  const changeDate = (e) => {
    setDate(Date.now())
  }
  useEffect(() => {
    console.log('youve loaded')
  }, [])

  useEffect(() => {
    setCounter(counter + 1)
    console.log('youve changed the user' + counter)
  }, [user])

  return (
    <div>
      <h1>Use effect</h1>
      <strong className={counter >= 10 ? 'label' : 'label-red'}>{user}</strong>
      <hr />
      <strong>{date}</strong>
      <p action=''>
        <input type='text' onChange={modUser} placeholder='change name' />
      </p>
      <button onClick={changeDate}>change date!</button>
      {counter >= 15 && <AlerComponent />}
      {user == 'cintia' && <AlerComponent />}
    </div>
  )
}
