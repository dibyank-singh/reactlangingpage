import React from 'react'

const Child = (setData) => {
    const handlechange=(e)=>{
       let valdata=e.target.value
        setData(e.target.value)
    }
    return (
        <div>
            <form action="">

          <input type="text"
           placeholder="Enter Your Name"
           onChange={handlechange}
        //    value= {valdata}
          />


            </form>
        </div>
    )
}

export default Child
