import React, { Component } from "react";


class Date3 extends Component{
    constructor(props){
        super(props);
        this.state={
            listData:['apple','graps','frits'],
            listData1:[{name:'keerthi'},{name:'hghhhh'}],
            listData3:{
                data:[
                    {name:"apple", validity:"3years",address:"delhi"},
                    {name:"banana", validity:"5years",address:"hydrabad"},
                    {name:"apple", validity:"10years",address:"pune"},
                    {name:"graps", validity:"7years",address:"node"},
                    {name:"friys", validity:"4years",address:"react"},
                    {name:"apple", validity:"1years",address:"nellore"}

                ],
            },
        };
    }
    render(){
        return(
            <div className="Date3">
                <h1>this is array{this.state.brand}</h1>
                {this.state.listData.map((listItam)=>(
                    <ul>
                        <li>{listItam}</li>
                    </ul>
                ))}
                <h2>list items</h2>
                {this.state.listData1.map((listItam)=>(
                    <ul>
                        <li>{listItam.name}</li>
                    </ul>

                ))}
                {this.state.listData3.data.map((item)=>(
                    <div>
                        <label>
                            Name: <b>{item.name}</b>
                        </label>
                        <label>
                            Validity: <b>{item.validity}</b>
                        </label>
                        <label>
                            Address: <b>{item.address}</b>

                        </label>

                    </div>
                ))}


            </div>
        );
    }
}
    

        
export default Date3;
