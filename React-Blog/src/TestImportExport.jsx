function TestImportExport(){
    return(
        <div>
            <h5>This is First function to default export</h5>
        </div>
    )
}

export function TestImportExport2(){
    return(
        <div>
            <h5>This is Second function to named export</h5>
        </div>   
    )
}

export function TestImportExport3(){
    return(
        <div>
            <h5>This is Third function to named export</h5>
            <TestNestedComponent/>
        </div>           
    )
}

function TestNestedComponent(){
    return(
       <div>
            <h5>This is Nested Component used in Third function of named export</h5>
        </div> 
    )
}

export const conKey='CON VAR';

export default TestImportExport