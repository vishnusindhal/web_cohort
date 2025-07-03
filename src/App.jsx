import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  const todos=[{
    title:"go to gym ",
    done:true
  },{
    title:"go to school ",
    done:false
  }]

     


  return (
    <div>
      
      <Card> 
        <div style={{color:"green"}}>what you want to post 
        <input type="text" / >
      </div>
      </Card>
       <Card> 
        content={<div style={{color:"green"}}>what you want to post 
        <input type="text" / >
      </div>}  
   
       </Card>
        </div>
    
  )

}

function Card({children}){

  return (

    <div style={{background:"black", borderRadius:10,padding:10,margin:10}}>
      {children}
    </div>
  )
}

export default App 
