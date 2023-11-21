import React, { useState } from 'react'
import './App.css'
import { configure } from '@testing-library/react'
import CellComponent from './CellComponent'

const App = () => {
const [order, setOrder] = useState([])
const [isDeactivating, setIsDeactivating] = useState(false)

// variable contain 3 by 3 array
const config = [
  [1, 1, 1], 
  [1, 0, 1], 
  [1, 1, 1]
]


  return (
   <>
   <div className='wrapper'>
   <div className='grid'>
{config.flat(1).map((value,index)=>{
  return value ? (
<CellComponent 
//get propc
key = {index}
label = {`cell ${index}`}
/>
  ):
   (
   <span/> 
   )

})}


{/* Array.flat() help to make ex const arr1 = [0, 1, 2, [3, 4]];
array inside array combime to be one array
expected output: Array [0, 1, 2, 3, 4, 5] */}
{/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat */}
   </div>

   </div>
   </>
      
  )
}

export default App
