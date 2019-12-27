import React, { Component } from 'react';
import ProgramDetails from './ProgramDetails';
import ProgramInput from './programInput';
import  './Interface.css';

class Interface extends Component {
    render(){
        return(
            <div className="container-fluid">
                 
                <h1 id="icon-name">Dhis2</h1>
                <div>

                    <h1 id="title">Program Rule Variable</h1>

                    < div className="row">
                    
                    <div className="card card-body ">
                        < ProgramInput/>
                    </div>
                    
                    <div className="card card-body">

                        < ProgramDetails/>
                          
                    </div>
                    </div>
                   
                </div>

            </div>

        );
    }
}

export default Interface;