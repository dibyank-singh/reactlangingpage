import React, { useState } from 'react'
import Child from './Child/Child'

import Scnchild from './Child2/Scnchild'

const Main = () => {

    const [ data , setData]=useState("")

    return (
        <div>
           <h2>THis is Main file</h2> 
           <Child setData={setData}/>
           <Scnchild data={data}/>
        </div>
    )
}

export default Main
