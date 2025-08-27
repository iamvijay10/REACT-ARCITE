import Greeting1 from "./Greeting1";

function Greeting({name,greatest}){

    return (
<>
<div>
    <Greeting1 name={name} greatest={greatest}/>
    {/* <h1>hello {name}</h1>
    <p>goat is {greatest}</p> */}
</div>

</>

   
)
}

export default Greeting;