import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import MilkCard from './MilkCard'
import { useState } from 'react'

function App() {

  const loaderMilks = useLoaderData()
  const [milks,setMilks] = useState(loaderMilks)


  

  return (
    <div className='max-w-5xl m-auto mt-14'>
      <h1 className='text-2xl font-semibold'>Milks Quantity - {milks.length}</h1>

      <Link to={'/addMilks'}>
      <button className='btn'> add milk</button>
      </Link>
      <Link to="/singup">
          <button className='btn'>add user</button>
      </Link>
      <Link to="/users">
          <button className='btn'>users</button>
      </Link>

      <div className='grid grid-cols-3 gap-4'>
        {
          milks.map(milk => <MilkCard key={milk._id} milk={milk} milks={milks} setMilks={setMilks}></MilkCard>)
        }
      </div>
    </div>
  )
}

export default App
