import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import TestImportExport, {TestImportExport2, TestImportExport3, conKey} from './TestImportExport.jsx'
import VariableTest from './VariableTest.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <TestImportExport/>
    <TestImportExport2/>
    <TestImportExport3/>
    <h1>{conKey}</h1>
    <p>==============================</p>
    <VariableTest/>
    <Footer/>
  
  </StrictMode>,
)
