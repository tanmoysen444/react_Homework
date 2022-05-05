function Welcome(){
    const [frind,setfrind]=React.useState([
        "Jithin","CTV","Sunny","Mukesh","Pradeep",
    ])
    let replaceSunny=()=>{
        let indexOfSunny=frind.indexOf("Sunny")
        if(indexOfSunny>=0){
            frind.splice(indexOfSunny,1,"Hemant")
            setfrind([...frind])
            console.log("indexOfSunny",indexOfSunny);
        }
    }
    return(
        <div>
            {frind.map((val,idx)=>{
                return<h2 key={idx}>{val}</h2>
            })}
            <button onClick={replaceSunny}>Change Sunny</button>
        </div>
    )
}
ReactDOM.render(<Welcome/>,document.getElementById("container"))