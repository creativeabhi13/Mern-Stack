import React from 'react'
import ReltaiveList from './Components/ReltaiveList'
import './App.css'
import PageLayout from './Components/PageLayout'

const App = () => {
    const year = new Date().getFullYear();
  return (
  <>
 
    <PageLayout
      header={<div> <h1>Welcome to my Website</h1></div>}
      footer={<div>© {year} My Website. All rights reserved.</div>}
    >

      <div>
        
        <p>This is the content of website.</p>
        <ReltaiveList/>
      </div>
    </PageLayout>
    </>
    
      
        

  
  )
}

export default App