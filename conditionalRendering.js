class Condition extends React.Component{
    state={
        adminName:"Girish",
        userName:"Tanmoy",
        isSdmin:true,
    };
    render(){
        let{adminName,userName,isAdmin}=this.state;
        let renderData=null;

        if(isAdmin){
            renderData=(
                <div>
                    <h1>Admin Name:{adminName}</h1>
                    <h1>HOME</h1>
                    <h1>Login</h1>
                    <h1>Add Product</h1>
                </div>
            );
        }else{
            renderData=(
            <div>
                <h1>User Name:{userName}</h1>
                <h1>HOME</h1>
                <h1>Login</h1>
            </div>
            );
        }

        return(
            <div>
                {renderData}
                <button onClick={()=>{
                    this.changeView();
                }}
                >
                    {isAdmin ? "see user view":"see Admin view"}
                </button>
            </div>
        );
    }
    changeView(){
        if(this.state.isAdmin){
            this.setState({
                isAdmin:false,
            });
        }else{
            this.setState({
                isAdmin:true,
            });
        }
    }
}
ReactDOM.render(<Condition/>,document.getElementById("container"))
    