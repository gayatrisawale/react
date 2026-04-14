{/* getting data of all varibale in Single Variable 'UserDataVar'
 function PropUser(UserDataVar){   
*/}

{/*getting data as an indivisual varibale same name given on parent componemy, here it collected in  curly brace*/}
//function PropUser({userName, userAge}){

{/*getting the object*/}
function PropUser({UserObj}){
    return (
        <>
            <h3>Prop User component:</h3>
            
            {/* Display Data Collected in one Single Varibale
            <h4>User Name:{UserDataVar.UserName}</h4>
            <h4>User Age:{UserDataVar.UserAge}</h4>
           
            /* Display an indivisual varible name
            <h4>User Name:{userName}</h4>
            <h4>User Age:{userAge}</h4>
             */}

            {/* Display an user Obj */}
            <h4>User Name:{UserObj.UserName}</h4>
            <h4>User Age:{UserObj.UserAge}</h4>
            <hr/> 
        </>
    )    
}
export default PropUser