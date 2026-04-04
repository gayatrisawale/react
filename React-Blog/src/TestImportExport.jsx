function TestImportExport(){
    return(
        <div>
            <h1>This is First function to default export</h1>
        </div>
    )
}

export function TestImportExport2(){
    return(
        <div>
            <h1>This is Second function to named export</h1>
        </div>   
    )
}


export function TestImportExport3(){
    return(
        <div>
            <h1>This is Third function to named export</h1>
            <TestNestedComponent/>
        </div>   
        
    )
}

function TestNestedComponent(){
    return(
       <div>
            <h1>This is Nested Component used in Third function of named export</h1>
        </div> 
    )
}

export const conKey='CON VAR';

export default TestImportExport