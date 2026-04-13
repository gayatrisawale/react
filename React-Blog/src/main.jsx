import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import TestImportExport, {TestImportExport2, TestImportExport3, conKey} from './TestImportExport.jsx'
import VariableTest from './VariableTest.jsx'
import Footer from './Footer.jsx'
import JsxCurly from './JsxCurly.jsx'
import FunctionTesting from './FunctionTesting.jsx'
import TestStatesHooks from './TestStatesHooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <hr/><TestStatesHooks/>  
    <hr/><App/> 
    <hr/><TestImportExport/>
        <TestImportExport2/>
        <TestImportExport3/>
        <h5>{conKey}</h5>
    <hr/><VariableTest/>
    <hr/><JsxCurly/>
    <hr/><FunctionTesting/>
     
    <hr/><Footer/>
  
  </StrictMode>,
)
