import PropUser from './PropUser'
import PropCollage from './PropCollage'
import { useState } from 'react'
function PropTest(){

    let UserObjVar={
        UserName :"Gitika",
        UserAge :32
    }
    let UserObjVar2={
        UserName :"Gaurav",
        UserAge :33
    }
    
    let collageNameArray=['MU', 'PU', 'NMU']

    const [collageName, setCollageName]=useState("");
    function SelectCollage(){
        setCollageName('Mumbai Shala')
    }
    return(
        <>
            <h3>Check Prop passing to component</h3>

            {/* passing multiple props in Variable  
            <PropUser userName='Gayatri' userAge={30} /> 
            <PropUser userName='Grishma' userAge={33} /> 
            */}
            
            {/*Passing the User Object*/}
            <PropUser UserObj={UserObjVar}/> 
            <PropUser UserObj={UserObjVar2}/> 

            {/* <PropCollage collageNameArrayData={collageNameArray}/> */}

            {collageName ? <PropCollage collageName={collageName}/> : "No Shala" }
            <button onClick={SelectCollage}>Select Collage</button>
        </>
    )
}

export default PropTest