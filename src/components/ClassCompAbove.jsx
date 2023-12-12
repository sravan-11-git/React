import React from "react"
class Aboutclass2 extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            count: 0,
        } 
    }

    render(){
        return (<div>
            <h3>{this.state.count}</h3>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1,
                })
            }}>COunt Increase</button>

            
            <h1>{this.props.location}</h1>
            <h2>Welcome </h2>
        </div>)

       
    }

};

export default Aboutclass2;