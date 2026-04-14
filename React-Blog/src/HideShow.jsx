import {useState} from "react";
function HideShow(){
    const [show, setShow]=useState(true);
    const [internalComp, setInternalComp]=useState(true);
    const[display, setDisplay]=useState(true);
    
    function FDisplay(){(setDisplay(!display))}

    function Toggle(){
        setShow(!show)
    }

    function ShowComponent(){
        setInternalComp(!internalComp)
    }
    return(
        <>
            <h3>Hide-Show Element</h3>
            {
                show?<h3>Its a element to show</h3> :null 
            }
            <button onClick={Toggle}>Toggle</button>
            
            {
                internalComp? <NestedComponent/>: null
            }
            <button onClick={ShowComponent}>Show</button>

            

        </>
    )
}

export function NestedComponent(){
    return(
    <>
    <h3>Its a Nested Component</h3>
    </>
    )
}




export function NewComponent(){
    return(
    <>
    <h3>Its a internal  NewComponent</h3>
    </>
    )
}

export default HideShow;