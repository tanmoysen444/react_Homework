console.log("*******************First Program***************");
class Parent extends React.Component{
    state={
        giveMyPhone:"",
    };
    render(){
        return(
            <div>
                <h3>{this.state.giveMyPhone}</h3>
                <h4>Hey this is parent</h4>
                <Child getDataFromChild={this.getDataFromChild.bind(this)}/>
            </div>
        )
    }
    getDataFromChild(childData){
        console.log("data of Parent",childData);
        this.setState({
            giveMyPhone:childData,
        })
    }
}

class Child extends React.Component{
    render(){
        console.log("props in child",this.props);
        let data="Take your Phone";
        return(
            <div>
                <h3>I am child</h3>
            <button onClick={()=>{
                this.props.getDataFromChild(data);
            }}>Get Phone</button>
            </div>
       

        );
    }
}
ReactDOM.render(<Parent/>,document.getElementById("container"))

// console.log("******************second Program*****************");
// class Parent extends React.Component{
//     state={
//         text:"",
//     };
//     render(){
//         return(
//             <div>
//                 <h1>Welcome,{this.state.text}</h1>
//                 <h2>i m Parent</h2>

//                 <Child getDataFromChild={this.getDataFromChild.bind(this)}/>
//             </div>
//         )
//     }
//     //chocolate to get data
//     getDataFromChild(childData){
//         console.log("data in parent:",childData);
//         this.setState({
//             text:childData,
//         });
//     }
// }
// class Child extends React.Component{
//     render(){
//         console.log("props in child",this.props);
//         let data="Hey Data from Child";
//         return(
//             <div>
//                 <h2>I m child</h2>
//                 <button onClick={()=>{
//                     this.props.getDataFromChild(data);
//                 }}
//                 >send data to parent</button>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Parent/>,document.getElementById("container"));

