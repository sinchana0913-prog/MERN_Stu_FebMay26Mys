import { useState } from 'react'

import './App.css'
import {FunctionName} from "./components/FunctionalCompOne.jsx"
import { FunctionalComponentsBasics } from "./components/FunctionalComponentsBasics.jsx"
import { ClassComponentsBasics } from "./components/ClassComponentsBasics.jsx"
import { FunctionComp } from "./components/FunctionalComponentsAdv.jsx"
import { ClassComponentState } from './components/ClassComponentsState.jsx'

function App() {
  

  return (
    //Fragment in react:<></>
    <>
    
    {/* <FunctionName /> */}{/* Component name */}
    {/*<FunctionalComponentsBasics /> */}
    {/*<ClassComponentsBasics /> */}
    {/*<FunctionComp/> */}
    <ClassComponentState/>
    </>
  )
}

export default App
