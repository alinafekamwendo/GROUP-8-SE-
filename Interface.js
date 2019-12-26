import React, { Component } from 'react';
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
                        <div >

                        <form>

                            <div className="form-group">

                                <select className="form-control" id="program">
                                    <option>HIV</option>
                                    <option>AIDS</option>
                                    <option>MALARIA</option>
                                    <option>SPHYLIS</option>
                                    <option>GONORRHEA</option>
                                </select>

                            </div>

                        </form>
                        <div className="card card-body">
                        <h2 className="card-header">prgram rule details</h2>

                        <form autoComplete="off">
                            
                                <label>Program</label>
                                    
                                    <input
                                        
                                        className="form-control"
                                        name="program"
                                        placeholder=" Program(*)"
                                    />
                            
                                <label>Name</label>
                                    
                                    <input
                                        
                                        className="form-control"
                                        name="name"
                                        type="text"
                                        placeholder="program name(*)"
                                    /> 
                            <button  className="btn btn-dark btn-block mt-3">Create</button>
                        </form>
                    </div>
                    </div>
                    </div>
                    
                    <div className="card card-body">


                        <h2>Variables</h2>
              
                    <form>

                        <div className="form-group">
                            <label>Data elements</label>
                            <select className="form-control" id="Data elements">
                                <option>AVC</option>
                                <option>NRC</option>
                                <option>VISITS</option>
                                <option>KK</option>
                                <option>FINAL</option>
                            </select>

                        </div>

                    </form>
                   
                 <div className="card card-body mt-5">
                    <table className="table-bordered">
                        
                            <tr>
                                <th>Program</th>
                                <th>name</th>
                                <th></th>
                            
                            </tr>
                        
                        
                                    <tr >
                                        <td>jambo</td>
                                        <td>chidziwisano</td>
                                        
                                    </tr>
                             
                    </table>
                    <button  className="btn btn-dark btn-block mt-3">Reset</button>

            </div>
                          
                    </div>
                    </div>
                   
                </div>

            </div>

        );
    }
}

export default Interface;