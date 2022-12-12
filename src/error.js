import React from 'react'


function Error() {
    return (
      <div>
        <City/>
      </div>
    )
  }
  
  function ErrorHandler({error}) {
    return (
      <div role="alert">
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
      </div>
    )
  }
  
  function City(name){
    try {
      return <div>Hello, visit{name.toUpperCase()} </div>
    } 
    catch (error) {
      return <ErrorHandler error={error} />
    }
  
    
  }
  
  export default Error;

