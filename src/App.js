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
//1. addindex to new array-- use order to update
const activatedCell =(index)=>{
const newOrder = [...order,index]
// ... spred operator copy from original array to new array when we add index to it
setOrder(newOrder)
//2. below deactivate -check if all boxes are clicked- if yes deActivateCells() this function work
if (newOrder.length === config.flat(1).filter(Boolean).length){
deActivateCells()
}
}
//
const deActivateCells=()=>{
  setIsDeactivating(true)
  const timer = setInterval(()=>{
    setOrder((originalOrder)=>{
      const newOrder = originalOrder.slice()
      newOrder.pop() //the last one that come in will be the first one to get out
      if (newOrder.length === 0){
        clearInterval(timer)
        setIsDeactivating(false)
      }
      return newOrder
    })
  },300)
  //300 mili second  is 3 second
}

  return (
   <>
   <div className='wrapper'>
   <div className='grid' style={{gridTemplateColumns: `repeat(${config[0].length},1fr)`,}}>
    {/* //length of the row */}
{config.flat(1).map((value,index)=>{
  return value ? (
<CellComponent 
//get propc
key = {index}
label={`cell ${index}`}// pass label as props to cellcomponent
filled = {order.includes(index)}
//order is state line 7--every time we click cell it go by order.include( index )
onClick = {()=>activatedCell(index)}
isDisable = {order.includes(index) || isDeactivating}// line 8 -isDeactivating
//we send filled - onclick - isDisable to our cellComponent

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
