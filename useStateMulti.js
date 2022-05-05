function Welcome(){
    const[animal, setanimal]= React.useState({
        forest:"Tiger",
        pet:"Dog",
    })
    console.log("animal",animal);
    let changeName=()=>{
        setanimal({
            ...animal,
            pet:"Cat"
        })
    }
    return (
        <div>
   <h1> Welcome,Forest animal:{animal.forest} <br></br>Pet animal:{animal.pet}</h1>
            <button onClick={()=>{changeName()}}>Change pet</button>
        </div>
    )
}
ReactDOM.render(<Welcome/>,document.getElementById("container"))