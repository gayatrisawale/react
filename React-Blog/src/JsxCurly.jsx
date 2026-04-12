function JsxCurly(){
    const nameVar="ConstantVar Gayatri";
    const imagePath="https://images.unsplash.com/photo-1775206352570-10538a3e5093?q=80&w=448&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    //--------------Array and Object---------------------    
    const userObj={
        name: 'Gayatri',
        subject: 'React/JS'
    }
    const SubArray=['php','react', 'JS', 'HTML' ];
    //-------------- end Array and Object---------------------
    return(
        <>
        <h3>Test JSX with Curly Braces</h3>
        <p>{nameVar}</p>
        <h3>write factorial: {fact(6)}</h3>
        <h3>Subject of user: {userObj.subject}</h3>
        <h3>Show Image</h3><br/>
        <img src={imagePath} height={200} width={600}></img>
        <br/><br/>
        Check Object: 
        <input type="text" name={userObj.name} value={userObj.subject} />
       
        <br/><br/>
        Check Array: 
        <input type="text" name={SubArray[0]} value={SubArray[1]} />
        </>
    )
}

function fact(n){
    let ans=1;
    for(let i=2; i<=n; i++)
    {
        ans=ans*i;
    }   
    return ans;
}
export default JsxCurly;        