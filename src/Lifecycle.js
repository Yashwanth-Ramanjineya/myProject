import React, {Component} from 'react';


class Lifecycle extends Component{

    constructor(props){
        super(props);
        this.state={
           username:"",
           password:""
        };
    }
    componentDidMount(){
        console.log("component did mount here")
    }
    shouldComponentUpdate(){
        console.log("component should update here")
        return true;
    }
    componentDidUpdate(){
        console.log("component did update here")
     }

     componentWillUnmount(){
         console.log("component will unmount updated")
     }
     handleusername = (e) =>{
         this.setState({username:e.target.value})
     }
     handlepassword =(e) =>{
         this.setState({password:e.target.value})
     }

     update = () => {
        if(this.state.username===""&& this.state.password==="") {
        this.setState({errorMessage:"you missed username/password"})

     } else {
        this.setState({errorMessage:""})
     }
         console.log(this.state.username+" "+ this.state.password)
     };
    
   render(){
        return(
            <div >
                <label>
                    Username:<input type="text" value={this.state.username} onChange={this.handleusername} />
                </label> <br/>
                <label>
                    Password: <input type="password" value={this.state.password} onChange={this.handlepassword} />
                    </label>
                <p className="error">{this.state.errorMessage}</p>
                <p>lifecycle:{this.state.username} + {this.state.password} </p>
                <button onClick={this.update}>update</button>
            </div>
        );
    }
}
export default Lifecycle;