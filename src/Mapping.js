import React, { Component } from 'react';

class Mapping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListData: ['html', 'css', 'javascript', 'reactjs'],
            ListData1: [{ name: 'sunitha' }, { name: 'sravani' }, { name: 'geethanvi' }],
            ListData2:{
                data:[
                {name:"sunitha", validity:"3years", address:"hyd"},
                {name:"sravani", validity:"1year", address:"mysore"},
                {name:"geethanvi", validity:"5years", address:"hyd"}
                ],
            },
        };

    }
    render() {
        return (
            <div className="Mapping">
                <h1>ListData</h1>
                {this.state.ListData.map((listItem) => (
                    <ul>
                        <li>{listItem}</li>
                    </ul>
                ))}
                <h2>Listnames</h2>
                {this.state.ListData1.map((listItem) => (
                    <ul>
                        <li>{listItem.name}</li>
                    </ul>
                ))}
                <h3>Listitem information</h3>
                {this.state.ListData2.data.map((listItem)=>(
                    <div>
                       <label>
                            Name:<b>{listItem.name}</b>
                        </label>
                         <label>
                             validity:<b>{listItem.validity}</b>
                         </label>
                         <label>
                             Address:<b>{listItem.address}</b>
                        </label> 
                   </div>
                ))}
           </div>
        );
    }
}
export default Mapping;