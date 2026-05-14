
import './App.css'
import {ManagingApiState} from './components/P1.jsx'
import{UseEffectLifecycle} from './components/P2.jsx'
import { AxiosLifecycle } from './components/P3.jsx'
import { CRUDOperation } from './components/P4.jsx'
import { PaginationCaching } from './components/P5.jsx'
function App() {
  

  return (
    <>
      {/* <ManagingApiState /> */}
      {/* <UseEffectLifecycle/> */}
      {/* <AxiosLifecycle/> */}
      {/* <CRUDOperation/> */}
      <PaginationCaching/>
    </>
  )
}

export default App
